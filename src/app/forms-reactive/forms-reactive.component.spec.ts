import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { FormsReactiveComponent } from './forms-reactive.component';

describe('FormsReactiveComponent', () => {
  let component: FormsReactiveComponent;
  let fixture: ComponentFixture<FormsReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [FormsReactiveComponent],
      providers: [FormBuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(FormsReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with username, email, gender and hobbies controls', () => {
    expect(component.signupForm.contains('userData')).toBeTruthy();
    expect(component.signupForm.contains('gender')).toBeTruthy();
    expect(component.signupForm.contains('hobbies')).toBeTruthy();
    expect(component.signupForm.get('userData.username')).toBeTruthy();
    expect(component.signupForm.get('userData.email')).toBeTruthy();
    expect(component.signupForm.get('gender')).toBeTruthy();
    expect(component.signupForm.get('hobbies')).toBeTruthy();
  });

  it('should require username and email controls to be valid', () => {
    const usernameControl = component.signupForm.get('userData.username');
    const emailControl = component.signupForm.get('userData.email');
    usernameControl?.setValue('');
    emailControl?.setValue('');
    expect(usernameControl?.valid).toBeFalsy();
    expect(emailControl?.valid).toBeFalsy();
    usernameControl?.setValue('John');
    emailControl?.setValue('john@test.com');
    expect(usernameControl?.valid).toBeTruthy();
    // expect(emailControl?.valid).toBeTruthy();
  });

  it('should add a hobby control when onAddHobby is called', () => {
    component.onAddHobby();
    expect(component.hobbyControls.length).toBe(1);
  });

  it('should add hobbies to the form', () => {
    const hobbies = component.signupForm.get('hobbies') as any;
    expect(hobbies.length).toBe(0);
    component.onAddHobby();
    expect(hobbies.length).toBe(1);
  });

  it('should reset the form when onSubmit is called', (done) => {
    // component.signupForm.setValue({
    //   userData: {
    //     username: 'John',
    //     email: 'john@test.com',
    //   },
    //   gender: 'male',
    //   hobbies: ['reading', 'swimming'],
    // });
    component.onSubmit();
    setTimeout(() => {
      expect(component.signupForm.value).toEqual({
        userData: {
          username: '',
          email: '',
        },
        gender: 'male',
        hobbies: [],
      });
      done();
    });
  });

  xit('should call forbiddenNames method when username control is changed', () => {
    spyOn(component, 'forbiddenNames');
    const usernameControl = component.signupForm.get('userData.username');
    usernameControl?.setValue('Chris');
    expect(component.forbiddenNames).toHaveBeenCalled();
  });

  it('should forbid certain usernames', () => {
    const username = component.signupForm.get('userData.username');
    username?.setValue('Chris');
    expect(username?.valid).toBeFalsy();
  });

  it('should accept non forbidden usernames', () => {
    const username = component.signupForm.get('userData.username');
    username?.setValue('Abcd');
    expect(username?.valid).toBeTruthy();
  });

  it('should forbid certain emails', (done) => {
    const email = component.signupForm.get('userData.email');
    email?.setValue('test@test.com');
    expect(email?.valid).toBeFalsy();
    setTimeout(() => {
      expect(email?.errors?.['emailIsForbidden']).toBeTruthy();
      done();
    }, 1500);
  });

  it('should return null for a valid email', (done: DoneFn) => {
    const email = component.signupForm.get('userData.email');
    email?.setValue('testw@test.com');
    setTimeout(() => {
      expect(email?.valid).toBeTruthy();
      done();
    }, 1500);
  });

  xit('should submit the form', () => {
    expect(component.signupForm.valid).toBeFalsy();
    const username = component.signupForm.get('userData.username');
    const email = component.signupForm.get('userData.email');
    username?.setValue('test');
    email?.setValue('email@test.com');
    expect(component.signupForm.valid).toBeTruthy();
    component.onSubmit();
    expect(component.signupForm.valid).toBeFalsy();
  });
});
