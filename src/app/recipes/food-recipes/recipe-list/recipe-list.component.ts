import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../recipe.model';

@Component({ selector: 'app-recipe-list', templateUrl: './recipe-list.component.html', standalone: false })
export class RecipeListComponent implements OnInit, OnDestroy {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes!: Recipe[];
  subscription!: Subscription;
  // recipes: Recipe[] = [
  //   new Recipe(
  //     'A test Recipe',
  //     'This is simply a test',
  //     'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', []
  //   ),
  //   new Recipe(
  //     'A test Recipe2',
  //     'This is simply a test2',
  //     'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', []
  //   ),
  // ];

  constructor(private recipesService: RecipesService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this.recipesService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
    this.recipes = this.recipesService.getRecipes();
  }

  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
