import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HotelRoomsRoutingModule } from './hotel-rooms-routing.module';
import { AppDirectivesModule } from '../app-directives/app-directives.module';

import { FilterPipe } from './pipes/filter.pipe';

import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { HotelComponent } from './hotel.component';
import { RoomComponent } from './rooms/room/room.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { LoginComponent } from './login/login.component';

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
    FilterPipe,
  ],
  imports: [
    CommonModule,
    HotelRoomsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppDirectivesModule,
  ],
})
export class HotelRoomsModule {}
