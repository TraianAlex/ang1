import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { EditServerComponent } from './edit-server.component';
import { fakeActivatedRoute } from 'src/app/test-utils/moks';

describe('EditServerComponent', () => {
  let component: EditServerComponent;
  let fixture: ComponentFixture<EditServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditServerComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EditServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
