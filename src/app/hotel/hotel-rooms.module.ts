import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoomsRoutingModule } from './hotel-rooms-routing.module';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { HotelComponent } from './hotel.component';
import { RoomComponent } from './rooms/room/room.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HeaderAppModule } from '../header-app/header-app.module';

@NgModule({
  declarations: [
    RoomsComponent,
    RoomsListComponent,
    ContainerComponent,
    EmployeeComponent,
    HotelComponent,
    RoomComponent,
    RoomsAddComponent,
    LoginComponent,
  ],
  imports: [CommonModule, HotelRoomsRoutingModule, FormsModule, HeaderAppModule],
})
export class HotelRoomsModule {}
