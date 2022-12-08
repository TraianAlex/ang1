import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BookingRoutingModule } from './booking-routing.module';

import { BookingComponent } from './booking.component';

@NgModule({
  declarations: [BookingComponent],
  imports: [CommonModule, BookingRoutingModule, ReactiveFormsModule, HttpClientModule],
})
export class BookingModule {}
