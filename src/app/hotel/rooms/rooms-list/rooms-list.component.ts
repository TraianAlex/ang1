import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';

import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnInit, OnChanges {
  @Input() rooms: RoomList[] = [];
  @Input() title: string = '';
  @Input() price: number = 0;
  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor(private roomsService: RoomsService, private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  ngOnInit(): void {}

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

  removeRoom(room: RoomList) {
    this.roomsService.delete(room).subscribe();
    this.roomsService.roomDeleted.next(room);
  }

  goToRoom(id: string | number) {
    this.router.navigate(['/hotel/rooms/' + id]);
  }
}
