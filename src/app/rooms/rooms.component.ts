import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton';
  numberOfRooms = 10;
  hideRooms = true;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [
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

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
