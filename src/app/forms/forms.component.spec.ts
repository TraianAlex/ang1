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

  it('should suggest a username', () => {
    component.suggestUserName();
    expect(component.signupForm.value.userData.username).toBe('Superuser');
  });

  it('should submit the form', () => {
    component.signupForm.setValue({
      userData: {
        username: 'testuser',
        email: 'testuser@example.com',
      },
      secret: 'teacher',
      questionAnswer: 'testanswer',
      gender: 'male',
    });
    component.onSubmit();
    expect(component.submitted).toBe(true);
    expect(component.user.username).toBe('testuser');
    expect(component.user.email).toBe('testuser@example.com');
    expect(component.user.secretQuestion).toBe('teacher');
    expect(component.user.answer).toBe('testanswer');
    expect(component.user.gender).toBe('male');
    expect(component.signupForm.value.userData.username).toBe(null);
    expect(component.signupForm.value.userData.email).toBe(null);
    expect(component.signupForm.value.secret).toBe(null);
    expect(component.signupForm.value.questionAnswer).toBe(null);
    expect(component.signupForm.value.gender).toBe(null);
  });
});
