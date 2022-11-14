import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './hotel/rooms/rooms.component';
import { RoomsListComponent } from './hotel/rooms/rooms-list/rooms-list.component';
import { HeaderAppComponent } from './header-app/header-app.component';
import { ContainerComponent } from './hotel/container/container.component';
import { EmployeeComponent } from './hotel/employee/employee.component';
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
import { BasicHighlightDirective } from './app-directives/basic-highlights/basic-hightlight.directive';
import { BetterHighlightDirective } from './app-directives/better-highlights/better-hightlight.directive';
import { UnlessDirective } from './app-directives/unless/unless.directive';
import { DropdownDirective } from './recipes/shared/dropdown.directive';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './app-config/app-config.service';
import { HotelComponent } from './hotel/hotel.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountComponent } from './accounts/account/account.component';
import { NewAccountComponent } from './accounts/new-account/new-account.component';
import { UsersComponent } from './users/users.component';
import { ActiveUsersComponent } from './users/active-users/active-users.component';
import { InactiveUsersComponent } from './users/inactive-users/inactive-users.component';
import { UsersServersHeaderComponent } from './users-servers/header/users-servers-header.component';
import { UsersComponent2 } from './users-servers/users/users2.component';
import { UserComponent } from './users-servers/users/user/user.component';
import { ServersComponent2 } from './users-servers/servers/servers2.component';
import { ServerComponent } from './users-servers/servers/server/server.component';
import { EditServerComponent } from './users-servers/servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './users-servers/page-not-found/page-not-found.component';
import { HomeComponent } from './users-servers/home/home.component';
import { ErrorPageComponent } from './users-servers/error-page/error-page.component';
import { RecipeEditComponent } from './recipes/food-recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipes/food-recipes/recipe-start/recipe-start.component';
import { ObservableComponent } from './observable/observable.component';
import { ObsHomeComponent } from './observable/obs-home/obs-home.component';
import { ObsUserComponent } from './observable/obs-user/obs-user.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListComponent,
    HeaderAppComponent,
    ContainerComponent,
    EmployeeComponent,
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
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    HotelComponent,
    AccountsComponent,
    AccountComponent,
    NewAccountComponent,
    UsersComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    UsersServersHeaderComponent,
    UsersComponent2,
    UserComponent,
    ServersComponent2,
    ServerComponent,
    EditServerComponent,
    PageNotFoundComponent,
    HomeComponent,
    ErrorPageComponent,
    RecipeEditComponent,
    RecipeStartComponent,
    ObservableComponent,
    ObsHomeComponent,
    ObsUserComponent,
    FormsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
