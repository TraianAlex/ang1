import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { RecipesRoutingModule } from './recipes-routing.module';

import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { FoodRecipesComponent } from './food-recipes/food-recipes.component';
import { RecipeListComponent } from './food-recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './food-recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './food-recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeEditComponent } from './food-recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './food-recipes/recipe-start/recipe-start.component';

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
    RecipeEditComponent,
    RecipeStartComponent,
  ],
  imports: [
    RecipesRoutingModule,
    RecipesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class RecipesModule {}
