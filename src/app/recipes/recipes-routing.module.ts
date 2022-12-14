import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRecipesGuard } from './auth/auth-recipes.guard';

import { RecipesResolverService } from './services/recipes-resolver.service';

import { AuthComponent } from './auth/auth.component';
import { FoodRecipesComponent } from './food-recipes/food-recipes.component';
import { RecipeDetailComponent } from './food-recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './food-recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './food-recipes/recipe-start/recipe-start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {
    path: 'recipes',
    component: FoodRecipesComponent,
    canActivate: [AuthRecipesGuard],
    children: [
      { path: 'recipes', component: RecipeStartComponent, resolve: [RecipesResolverService] },
      { path: 'new', component: RecipeEditComponent, resolve: [RecipesResolverService] },
      { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
      { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService] },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
