import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { CommentGuard } from './comment.guard';

describe('CommentGuard', () => {
  let guard: CommentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormBuilder, HttpClient, HttpHandler],
    });
    guard = TestBed.inject(CommentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
