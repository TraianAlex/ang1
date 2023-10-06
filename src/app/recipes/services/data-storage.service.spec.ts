import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { DataStorageService } from './data-storage.service';
import { APP_CONFIG, APP_SERVICE_CONFIG } from 'src/app/app-config/app-config.service';

describe('DataStorageService', () => {
  let service: DataStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler, { provide: APP_SERVICE_CONFIG, useValue: APP_CONFIG }],
    });
    service = TestBed.inject(DataStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
