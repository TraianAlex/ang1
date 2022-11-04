import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FoodRecipesComponent } from './recipes/food-recipes/food-recipes.component';
import { RecipeListComponent } from './recipes/food-recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/food-recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/food-recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './recipes/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './recipes/shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListComponent,
    HeaderComponent,
    ContainerComponent,
    EmployeeComponent,
    RecipesComponent,
    FoodRecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
