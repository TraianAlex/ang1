import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RecipesRoutingModule } from './recipes-routing.module';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { FoodRecipesComponent } from './food-recipes/food-recipes.component';
import { RecipeListComponent } from './food-recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './food-recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './food-recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipeEditComponent } from './food-recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './food-recipes/recipe-start/recipe-start.component';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AuthComponent,
    HeaderComponent,
    FoodRecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeEditComponent,
    RecipeStartComponent,
    LoadingSpinnerComponent,
  ],
  imports: [CommonModule, RecipesRoutingModule, RecipesRoutingModule, FormsModule, ReactiveFormsModule],
})
export class RecipesModule {}
