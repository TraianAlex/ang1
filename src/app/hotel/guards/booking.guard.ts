import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { BookingComponent } from 'src/app/booking/booking.component';

@Injectable({
  providedIn: 'root',
})
export class BookingGuard implements CanDeactivate<BookingComponent> {
  canDeactivate(
    component: BookingComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
    return component.bookingForm.pristine;
  }
}


/**
 constructor(private _snackBar: MatSnackBar) {}

 if (component.bookingForm.pristine) {
  return component.bookingForm.pristine;
 } else {
  this._snackBar.open('You have unsaved changes!', 'DISCARD');
 }
 */ 
