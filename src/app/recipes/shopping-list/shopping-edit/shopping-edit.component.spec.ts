import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';

import { ShoppingEditComponent } from './shopping-edit.component';

describe('ShoppingEditComponent', () => {
  let component: ShoppingEditComponent;
  let fixture: ComponentFixture<ShoppingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingEditComponent, NgForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
