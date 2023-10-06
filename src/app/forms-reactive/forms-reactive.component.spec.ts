import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { FormsReactiveComponent } from './forms-reactive.component';

describe('FormsReactiveComponent', () => {
  let component: FormsReactiveComponent;
  let fixture: ComponentFixture<FormsReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsReactiveComponent ],
      providers: [FormBuilder],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
