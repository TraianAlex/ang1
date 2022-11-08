import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { HeaderAppComponent } from './header-app/header-app.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { RecipesComponent } from './recipes/recipes.component';
import { HeaderComponent } from './recipes/header/header.component';
import { FoodRecipesComponent } from './recipes/food-recipes/food-recipes.component';
import { RecipeListComponent } from './recipes/food-recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/food-recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/food-recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './recipes/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './recipes/shopping-list/shopping-edit/shopping-edit.component';
import { ServersComponent } from './servers/servers.component';
import { CockpitComponent } from './servers/cockpit/cockpit.component';
import { ServerElementComponent } from './servers/server-element/server-element.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { GameControlComponent } from './data-binding/game-control/game-control.component';
import { EvenComponent } from './data-binding/even/even.component';
import { OddComponent } from './data-binding/odd/odd.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListComponent,
    HeaderAppComponent,
    ContainerComponent,
    EmployeeComponent,
    RecipesComponent,
    HeaderComponent,
    FoodRecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ServersComponent,
    CockpitComponent,
    ServerElementComponent,
    DataBindingComponent,
    GameControlComponent,
    EvenComponent,
    OddComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
