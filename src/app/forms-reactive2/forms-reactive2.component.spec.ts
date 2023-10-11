import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { FormsReactive2Component } from './forms-reactive2.component';

describe('FormsReactive2Component', () => {
  let component: FormsReactive2Component;
  let fixture: ComponentFixture<FormsReactive2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [FormsReactive2Component],
      providers: [FormBuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(FormsReactive2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a projectForm property', () => {
    expect(component.projectForm).toBeDefined();
  });

  it('should have a projStatus property', () => {
    expect(component.projStatus).toBeDefined();
  });

  it('should have a projectData form group', () => {
    expect(component.projectForm.get('projectData')).toBeTruthy();
  });

  it('should have a projectName form control', () => {
    expect(component.projectForm.get('projectData.projectName')).toBeTruthy();
  });

  it('should have a email form control', () => {
    expect(component.projectForm.get('projectData.email')).toBeTruthy();
  });

  it('should have a projectStatus form control', () => {
    expect(component.projectForm.get('projectStatus')).toBeTruthy();
  });

  it('should have a default value for projectStatus', () => {
    expect(component.projectForm.get('projectStatus')?.value).toEqual(component.projStatus[0]);
  });

  it('should set the default value of projectStatus to "Stable"', () => {
    expect(component.projectForm.get('projectStatus')?.value).toBe('Stable');
  });

  it('should call onSaveProject method when the form is submitted', () => {
    spyOn(component, 'onSaveProject');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    expect(component.onSaveProject).toHaveBeenCalled();
  });

  it('should log the form value when onSaveProject is called', () => {
    spyOn(console, 'log');
    component.onSaveProject();
    expect(console.log).toHaveBeenCalledWith(component.projectForm.value);
  });
});
