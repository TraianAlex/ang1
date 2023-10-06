import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { ServerComponent } from './server.component';
import { fakeActivatedRoute } from 'src/app/test-utils/moks';

describe('ServerComponent', () => {
  let component: ServerComponent;
  let fixture: ComponentFixture<ServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServerComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
