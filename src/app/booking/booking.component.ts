import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { exhaustMap, mergeMap, switchMap } from 'rxjs/operators';
import { BookingService } from './booking.service';
import { CustomValidator } from './validators/custom-validator';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;
  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const roomId = this.route.snapshot.paramMap?.get('id');
    this.bookingForm = this.fb.group(
      {
        userData: this.fb.group({
          roomId: new FormControl(
            { value: roomId || '11', disabled: true },
            { validators: [Validators.required] }
          ),
          guestEmail: ['', [Validators.required, Validators.email]],
          checkinDate: [''],
          checkoutDate: [''],
          bookingStatus: [''],
          bookingAmount: [
            '',
            { updateOn: 'blur', validators: [Validators.required, Validators.email] },
          ],
          bookingDate: [''],
          mobileNumber: ['', { updateOn: 'blur' }],
          guestName: [
            '',
            [
              Validators.required,
              Validators.minLength(5),
              CustomValidator.validateName,
              CustomValidator.validateSpecialChar('*'),
            ],
          ],
          guestCount: [''],
        }),
        address: this.fb.group({
          addressLine1: ['', [Validators.required]],
          addressLine2: [''],
          guestCity: ['', [Validators.required]],
          guestState: ['', [Validators.required]],
          guestCountry: [''],
          guestZipCode: [''],
        }),
        guests: this.fb.array([this.guestControls()]),
        tnc: new FormControl(false, { validators: [Validators.required, Validators.requiredTrue] }),
      },
      { updateOn: 'blur', validators: [CustomValidator.validateDate] } // change is default, submit is only check at submit, bluer after each control
    );
    // this.getBookingData();
    // this.bookingForm.valueChanges.subscribe((data) => {
    //   console.log(data);
    //   this.bookingService.bookRoom(data).subscribe(data => {});
    // });
    // this.bookingForm.valueChanges // create requests in parallel
    //   .pipe(mergeMap((data) => this.bookingService.bookRoom(data)))
    //   .subscribe((data) => console.log(data));
    // this.bookingForm.valueChanges // cancel the previous request if new requst is made
    //   .pipe(switchMap((data) => this.bookingService.bookRoom(data)))
    //   .subscribe((data) => console.log(data));
    this.bookingForm.valueChanges // until the previous request is not complete bot going to call the api
      .pipe(exhaustMap((data) => this.bookingService.bookRoom(data)))
      .subscribe((data) => console.log(data));
  }

  getBookingData() {
    this.bookingForm.setValue({
      // patchValue can set just few
      userData: {
        roomId: 16,
        guestEmail: 'talex@gmail.com',
        checkinDate: '1.1.1999',
        checkoutDate: '1.1.2000',
        bookingStatus: '',
        bookingAmount: '200',
        bookingDate: '30.11.1998',
        mobileNumber: '123456789',
        guestName: 'Traian',
        guestCount: 2,
      },
      address: {
        addressLine1: 'str Trivale',
        addressLine2: '',
        guestCity: 'Pitesti',
        guestState: 'Arges',
        guestCountry: 'Romania',
        guestZipCode: '110058',
      },
      guests: [{ name: 'Test', age: 15 }],
      tnc: false,
    });
  }

  addBooking() {
    console.log(this.bookingForm.value, this.bookingForm.getRawValue());
    // this.bookingService.bookRoom(this.bookingForm.getRawValue()).subscribe((data) => {
    //   console.log(data);
    // });
    // this.bookingForm.reset({
    //   userData: { roomId: '14', guestEmail: '', guestName: '' },
    //   address: { addressLine1: '' },
    // });
  }

  addGuest() {
    this.guests.push(this.guestControls());
  }

  private guestControls() {
    return this.fb.group({
      name: ['', [Validators.required]],
      age: new FormControl('', { validators: [Validators.required] }),
    });
  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }

  deletePassport() {
    if (this.bookingForm.get('passport')) {
      this.bookingForm.removeControl('passport');
    }
  }

  removeGuest(i: number) {
    this.guests.removeAt(i);
  }
}

// export class Booking {
//   roomId: string;
//   guestEmail: string;
//   checkinDate: Date;
//   checkoutDate: Date;
//   bookingStatus: string;
//   bookingAmount: number;
//   bookingDate: Date;
//   mobileNumber: string;
//   guestName: string;
//   guestAddress: string;
//   guestCity: string;
//   guestState: string;
//   guestCountry: string;
//   guestZipCode: string;
//   guestCount: number;
//   guestList: Guest[];
// }
