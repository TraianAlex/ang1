import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodRecipesComponent } from './food-recipes.component';

describe('FoodRecipesComponent', () => {
  let component: FoodRecipesComponent;
  let fixture: ComponentFixture<FoodRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodRecipesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
