import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { BookingComponent } from './booking.component';
import { fakeActivatedRoute } from '../test-utils/moks';

describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingComponent],
      providers: [
        FormBuilder,
        HttpClient,
        HttpHandler,
        {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
