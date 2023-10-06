import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { RecipeEditComponent } from './recipe-edit.component';
import { fakeActivatedRoute } from 'src/app/test-utils/moks';
import { FormBuilder } from '@angular/forms';

describe('RecipeEditComponent', () => {
  let component: RecipeEditComponent;
  let fixture: ComponentFixture<RecipeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeEditComponent],
      providers: [
        FormBuilder,
        {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
