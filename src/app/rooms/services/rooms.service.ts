import { Inject, Injectable } from '@angular/core';
import { AppConfig } from 'src/app/app-config/app-config.interface';
import { APP_SERVICE_CONFIG } from 'src/app/app-config/app-config.service';
import { RoomList } from '../rooms';
//import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Free Wi-Fi, Tv, Bathroom',
      price: 100,
      photos:
        'https://www.1hotels.com/sites/default/files/styles/cards_2_constrained/public/2021-04/1_Hotel_Guestrooms07V2.jpg?h=dd930c52&itok=pzuQlbm2',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 3.5,
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'Air COnditioner, Free Wi-Fi, Tv, Bathroom',
      price: 200,
      photos:
        'https://www.1hotels.com/sites/default/files/styles/cards_2_constrained/public/2021-04/1_Hotel_Guestrooms07V2.jpg?h=dd930c52&itok=pzuQlbm2',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.5654,
    },
    {
      roomNumber: 3,
      roomType: 'Pivate Suite',
      amenities: 'Air COnditioner, Free Wi-Fi, Tv, Bathroom, Kitchen',
      price: 300,
      photos:
        'https://www.1hotels.com/sites/default/files/styles/cards_2_constrained/public/2021-04/1_Hotel_Guestrooms07V2.jpg?h=dd930c52&itok=pzuQlbm2',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.7,
    },
  ];

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
    //console.log(environment.apiEndpoint)
    console.log(this.config.apiEndpoint)
  }

  getRooms() {
    return this.roomList;
  }
}
