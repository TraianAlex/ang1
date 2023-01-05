import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
  QueryList,
  SkipSelf,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { HttpEventType } from '@angular/common/http';
import { catchError, map, Observable, of, Subject, Subscription } from 'rxjs';
import { HeaderAppComponent } from '../../header-app/header-app.component';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy {
  private subscription!: Subscription;
  private roomsChangedSubs!: Subscription;
  private roomsSubscription!: Subscription;
  private roomAdded!: Subscription;
  roomsChanged = new Subject<RoomList[]>();
  error$ = new Subject<string>();
  getError$ = this.error$.asObservable();
  // rooms$ = this.roomsService.getRooms$.pipe(
  //   catchError((err) => {
  //     // console.error(err);
  //     this.error$.next(err.message); // usually not here. moved to a service or exception handling
  //     return of([]);
  //   })
  // );
  // roomsCount$ = this.roomsService.getRooms$.pipe(
  //   map(rooms => rooms.length)
  // );
  priceFilter = new FormControl(0);

  // numberOfRooms = 10;
  hideRooms = true;
  // rooms: Room = {
  //   totalRooms: 20,
  //   availableRooms: 10,
  //   bookedRooms: 5,
  // };
  roomList!: RoomList[];
  selectedRoom!: RoomList;
  title = 'Room list';
  totalBytes = 0;

  // @ViewChild(HeaderAppComponent) headerComponent!: HeaderAppComponent; // , {static: true}
  // @ViewChildren(HeaderAppComponent) headerChildrenComponent!: QueryList<HeaderAppComponent>;

  constructor(@SkipSelf() private roomsService: RoomsService) {
    // console.log('a singleton instance initialized');
  }

  ngOnInit(): void {
    this.roomsChangedSubs = this.roomsChanged.subscribe((data) => {
      this.roomList = data;
    });
    this.roomAdded = this.roomsService.roomAdded.subscribe((data) => {
      this.roomList = [...this.roomList, data];
    });
    // console.log('headerComponent', this.headerComponent);
    this.subscription = this.roomsService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request has been made');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request success!');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log('Request complete!', event.body);
        }
      }
    });
    this.roomsSubscription = this.roomsService
      .getRooms()
      .subscribe((rooms) => (this.roomList = rooms));
  }

  ngDoCheck(): void {
    //console.log('on changes is called. called at any render. to avoid. not together with ngOnChanges');
  }

  ngAfterViewInit(): void {
    // console.log('header component', this.headerComponent);
    // this.headerComponent.title = 'Rooms view';
    // console.log('headerChildrenComponent', this.headerChildrenComponent);
    // this.headerChildrenComponent.last.title = 'Last Title';
  }

  ngAfterViewChecked(): void {
    // can load dinamic view like <ng-template #user></ng-template> from app.component.html
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List toggled';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 3,
      roomType: 'Other Room',
      amenities: 'Free Wi-Fi, Tv, Bathroom',
      price: 150,
      photos:
        'https://www.1hotels.com/sites/default/files/styles/cards_2_constrained/public/2021-04/1_Hotel_Guestrooms07V2.jpg?h=dd930c52&itok=pzuQlbm2',
      checkinTime: new Date('14-Nov-2021'),
      checkoutTime: new Date('15-Nov-2021'),
      rating: 4.2,
    };
    this.roomsService.addRoom(room).subscribe((data) => {
      this.roomList = [...this.roomList, data];
    });
  }

  editRoom() {
    const formData = {
      id: 1,
      roomType: 'Other Room changed',
    };
    this.roomsService.editRoom(formData).subscribe((newRoom) => {
      this.roomList.splice(+formData.id - 1, 1, newRoom);
      this.roomsChanged.next(this.roomList.slice());
    });
  }

  deleteRoom(id: string) {
    this.roomsService.delete(id).subscribe((data) => {
      this.roomList.splice(+id - 1, 1);
      this.roomsChanged.next(this.roomList.slice());
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.roomsChangedSubs.unsubscribe();
    this.roomsSubscription.unsubscribe();
    this.roomAdded.unsubscribe();
  }
}
