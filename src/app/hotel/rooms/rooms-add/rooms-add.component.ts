import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss'],
})
export class RoomsAddComponent implements OnInit {
  room: RoomList = {
    roomNumber: '',
    roomType: '',
    amenities: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photos: '',
    price: 0,
    rating: 0,
  };
  successMessage!: string;

  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {}

  addRoom(roomsForm: NgForm) {
    this.roomsService.addRoom(this.room).subscribe((room) => {
      this.successMessage = 'Room added successfully';
      roomsForm.reset(); // roomsForm.resetForm({ roomType: '', amenities: '' });
      this.roomsService.roomAdded.next(room);
    });
  }
}
