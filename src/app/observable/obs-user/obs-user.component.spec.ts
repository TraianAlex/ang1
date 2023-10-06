import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { ObsUserComponent } from './obs-user.component';
import { fakeActivatedRoute } from 'src/app/test-utils/moks';

describe('ObsUserComponent', () => {
  let component: ObsUserComponent;
  let fixture: ComponentFixture<ObsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObsUserComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ObsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
