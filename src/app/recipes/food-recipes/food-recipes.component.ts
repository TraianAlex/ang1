import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-food-recipes',
  templateUrl: './food-recipes.component.html',
  styleUrls: ['./food-recipes.component.scss'],
})
export class FoodRecipesComponent implements OnInit {
  selectedRecipe!: Recipe;

  constructor() {}

  ngOnInit(): void {}
}
