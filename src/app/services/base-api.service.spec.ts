import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { BaseApiService } from './base-api.service';

describe('BaseApiService', () => {
  let service: BaseApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler],
    });
    service = TestBed.inject(BaseApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
