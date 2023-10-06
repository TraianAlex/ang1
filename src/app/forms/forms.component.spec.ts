import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm, NgModel, NgModelGroup } from '@angular/forms';

import { FormsComponent } from './forms.component';

describe('FormsComponent', () => {
  let component: FormsComponent;
  let fixture: ComponentFixture<FormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsComponent, NgForm, NgModelGroup, NgModel],
    }).compileComponents();

    fixture = TestBed.createComponent(FormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
