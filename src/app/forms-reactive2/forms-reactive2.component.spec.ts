import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { FormsReactive2Component } from './forms-reactive2.component';

describe('FormsReactive2Component', () => {
  let component: FormsReactive2Component;
  let fixture: ComponentFixture<FormsReactive2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsReactive2Component ],
      providers: [FormBuilder],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsReactive2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
