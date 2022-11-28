import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelComponent } from './hotel.component';
import { LoginComponent } from './login/login.component';
import { RoomComponent } from './rooms/room/room.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';

const routes: Routes = [
  {
    path: '', // hotel removed for lazy loading
    component: HotelComponent,
    children: [
      { path: 'rooms/add', component: RoomsAddComponent },
      { path: 'rooms/:id', component: RoomComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelRoomsRoutingModule {}
