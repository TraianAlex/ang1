import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipesService } from 'src/app/recipes/services/recipes.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;
  // @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {}

  onSelected() {
    //this.recipeSelected.emit();
    this.recipesService.recipeSelected.emit(this.recipe);
  }
}