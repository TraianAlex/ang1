import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { APP_CONFIG, APP_SERVICE_CONFIG } from 'src/app/app-config/app-config.service';
import { RoomsService } from './rooms.service';

describe('RoomsService', () => {
  let service: RoomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler, { provide: APP_SERVICE_CONFIG, useValue: APP_CONFIG }],
    });
    service = TestBed.inject(RoomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
