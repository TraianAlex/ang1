import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { RoomGuard } from './guards/room.guard';
import { HotelComponent } from './hotel.component';
import { LoginComponent } from './login/login.component';
import { RoomComponent } from './rooms/room/room.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';

const routes: Routes = [
  {
    path: '', // hotel removed for lazy loading
    component: HotelComponent,
    canActivateChild: [RoomGuard],
    children: [
      { path: 'rooms/add', component: RoomsAddComponent, canActivate: [LoginGuard] },
      { path: 'rooms/:id', component: RoomComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'booking',
    loadChildren: () => import('../booking/booking.module').then((m) => m.BookingModule),
    canActivate: [LoginGuard],
    canLoad: [LoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelRoomsRoutingModule {}
