import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelComponent } from './hotel.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('HotelComponent', () => {
  let component: HotelComponent;
  let fixture: ComponentFixture<HotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HotelComponent],
      providers: [HttpClient, HttpHandler],
    }).compileComponents();

    fixture = TestBed.createComponent(HotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
