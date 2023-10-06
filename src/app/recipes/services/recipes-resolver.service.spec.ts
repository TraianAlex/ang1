import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { RecipesResolverService } from './recipes-resolver.service';
import { APP_CONFIG, APP_SERVICE_CONFIG } from 'src/app/app-config/app-config.service';

describe('RecipesResolverService', () => {
  let service: RecipesResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler, { provide: APP_SERVICE_CONFIG, useValue: APP_CONFIG }],
    });
    service = TestBed.inject(RecipesResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
