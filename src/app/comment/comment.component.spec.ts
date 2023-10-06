import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { CommentComponent } from './comment.component';
import { fakeActivatedRoute } from '../test-utils/moks';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentComponent ],
      providers: [ HttpClient, HttpHandler, {
        provide: ActivatedRoute,
        useValue: fakeActivatedRoute,
      }, ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
