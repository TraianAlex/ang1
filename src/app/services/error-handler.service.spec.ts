import { TestBed } from '@angular/core/testing';

import { ErrorHandlerService } from './error-handler.service';

describe('ErrorHandlerService', () => {
  let service: ErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [],
    });
    service = TestBed.inject(ErrorHandlerService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
