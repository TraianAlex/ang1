import { TestBed } from '@angular/core/testing';

import { DataService } from './data-service.service';

describe('DataServiceService', () => {
  // @ts-expect-error
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit the state', () => {
    service.setData('Hello');
    service.state$.subscribe((state: any) => {
      expect(state).toBe('Hello');
    });
  });
});
