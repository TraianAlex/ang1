import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsReactive2Component } from './forms-reactive2.component';

describe('FormsReactive2Component', () => {
  let component: FormsReactive2Component;
  let fixture: ComponentFixture<FormsReactive2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsReactive2Component ]
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
