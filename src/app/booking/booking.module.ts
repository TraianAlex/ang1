import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { BookingRoutingModule } from './booking-routing.module';

import { BookingComponent } from './booking.component';

@NgModule({ declarations: [BookingComponent], imports: [CommonModule, BookingRoutingModule, ReactiveFormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class BookingModule {}
