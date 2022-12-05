import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent2 } from './users-servers/users/users2.component';
import { UserComponent } from './users-servers/users/user/user.component';
import { ServersComponent2 } from './users-servers/servers/servers2.component';
import { ServerComponent } from './users-servers/servers/server/server.component';
import { EditServerComponent } from './users-servers/servers/edit-server/edit-server.component';
import { ErrorPageComponent } from './users-servers/error-page/error-page.component';
import { AuthGuardService } from './users-servers/services/auth-guard.service';
import { ServerResolverService } from './users-servers/services/server-resolver.service';
import { CanDeactivateGuardService } from './users-servers/services/can-deactivate-guard.service';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AccountsComponent } from './accounts/accounts.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './users-servers/home/home.component';
import { ShoppingListComponent } from './recipes/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/food-recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/food-recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipes/food-recipes/recipe-start/recipe-start.component';
import { FoodRecipesComponent } from './recipes/food-recipes/food-recipes.component';
import { ObservableComponent } from './observable/observable.component';
import { ObsHomeComponent } from './observable/obs-home/obs-home.component';
import { ObsUserComponent } from './observable/obs-user/obs-user.component';
import { FormsComponent } from './forms/forms.component';
import { FormsReactiveComponent } from './forms-reactive/forms-reactive.component';
import { FormsReactive2Component } from './forms-reactive2/forms-reactive2.component';
import { PipesComponent } from './pipes/pipes.component';
import { HttpComponent } from './http/http.component';
import { RecipesResolverService } from './recipes/services/recipes-resolver.service';
import { AuthComponent } from './recipes/auth/auth.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: FoodRecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent, resolve: [RecipesResolverService] },
      { path: 'new', component: RecipeEditComponent, resolve: [RecipesResolverService] },
      { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
      { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService] },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'biding', component: DataBindingComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'users-servers', component: HomeComponent },
  { path: 'post', component: HttpComponent },
  {
    path: 'hotel',
    loadChildren: () => import('./hotel/hotel-rooms.module').then((m) => m.HotelRoomsModule),
  },
  {
    path: 'observable',
    component: ObservableComponent,
    children: [
      { path: '', component: ObsHomeComponent },
      { path: 'user/:id', component: ObsUserComponent },
    ],
  },
  { path: 'forms', component: FormsComponent },
  { path: 'reactive', component: FormsReactiveComponent },
  { path: 'reactive2', component: FormsReactive2Component },
  { path: 'pipes', component: PipesComponent },
  {
    path: 'users-servers/users',
    component: UsersComponent2,
    children: [{ path: ':id/:name', component: UserComponent }],
  },
  {
    path: 'users-servers/servers',
    // canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    component: ServersComponent2,
    children: [
      { path: ':id', component: ServerComponent, resolve: { server: ServerResolverService } },
      {
        path: ':id/edit',
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGuardService],
      },
    ],
  },
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  declarations: [],
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
