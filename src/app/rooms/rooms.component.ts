import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  hotelName = 'Hilton';
  numberOfRooms = 10;
  hideRooms = true;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };
  roomList: RoomList[] = [];
  selectedRoom!: RoomList;
  title = 'Room list';

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent; // , {static: true}
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor() {}

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Free Wi-Fi, Tv, Bathroom',
        price: 100,
        photos:
          'http://images.unsplash.com/photo-1518791841217-8f16f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiojEyMDd9&auto=format&fit=crop&w=800&q=60', //'http://images.unsplash.com/photo-1518791841217-8f16f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiojEyMDd9&auto=format&fit=crop&w=800&q=60',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 3.5,
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room',
        amenities: 'Air COnditioner, Free Wi-Fi, Tv, Bathroom',
        price: 200,
        photos: 'https://unsplash.com/photos/oxeCZrodz78', //'http://images.unsplash.com/photo-1518791841217-8f16f1e1131?ixl',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 4.5654,
      },
      {
        roomNumber: 3,
        roomType: 'Pivate Suite',
        amenities: 'Air COnditioner, Free Wi-Fi, Tv, Bathroom, Kitchen',
        price: 300,
        photos: 'https://unsplash.com/photos/oxeCZrodz78', //'http://images.unsplash.com/photo-1518791841217-8f16f1e1131?ixl',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 4.7,
      },
    ];
    //console.log(this.headerComponent);
  }

  ngDoCheck(): void {
    console.log('on changes is called. called at any render. to avoid. not together with ngOnChanges');
  }

  ngAfterViewInit(): void {
    //console.log(this.headerComponent);
    this.headerComponent.title = 'Rooms view';
    console.log(this.headerChildrenComponent);
    this.headerChildrenComponent.last.title = 'Last Title';
  }

  ngAfterViewChecked(): void {
    // can load dinamic view like <ng-template #user></ng-template> from app.component.html
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
    console.log(room);
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Other Room',
      amenities: 'Free Wi-Fi, Tv, Bathroom',
      price: 150,
      photos:
        'http://images.unsplash.com/photo-1518791841217-8f16f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiojEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('14-Nov-2021'),
      checkoutTime: new Date('15-Nov-2021'),
      rating: 4.2,
    };
    //this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}
