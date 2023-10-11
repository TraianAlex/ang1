import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BookingService } from './booking.service';

describe('BookingService', () => {
  let service: BookingService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookingService],
    });
    service = TestBed.inject(BookingService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should post booking data', () => {
    const booking = { room: '101', date: '2022-01-01', time: '10:00 AM' };
    service.bookRoom(booking).subscribe((res) => {
      expect(res).toBeTruthy();
    });

    const req = httpMock.expectOne('http://jsonplaceholder.typicode.com/posts');
    expect(req.request.method).toBe('POST');
    req.flush({ data: booking });
  });
});
