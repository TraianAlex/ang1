import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({ selector: 'app-recipe-item', templateUrl: './recipe-item.component.html', standalone: false })
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Input() index!: number;
  // @Output() recipeSelected = new EventEmitter<void>();

  constructor() {} // private recipesService: RecipesService

  ngOnInit(): void {}

  // onSelected() {
  //   //this.recipeSelected.emit();
  //   this.recipesService.recipeSelected.emit(this.recipe);
  // }
}
