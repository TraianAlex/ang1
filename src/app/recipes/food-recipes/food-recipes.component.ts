import { Component, OnInit } from '@angular/core';
// import { RecipesService } from '../services/recipes.service';
// import { Recipe } from './recipe.model';

@Component({
  selector: 'app-food-recipes',
  templateUrl: './food-recipes.component.html',
  styleUrls: ['./food-recipes.component.scss'],
})
export class FoodRecipesComponent implements OnInit {
  // selectedRecipe!: Recipe;

  constructor() {} // private recipesService: RecipesService

  ngOnInit(): void {
    // this.recipesService.recipeSelected.subscribe((recipe: Recipe) => {
    //   this.selectedRecipe = recipe;
    // });
  }
}
