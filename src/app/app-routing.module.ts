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
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AccountsComponent } from './accounts/accounts.component';
import { UsersComponent } from './users/users.component';
import { UsersServersComponent } from './users-servers/users-servers.component';
import { ServersComponent } from './servers/servers.component';
import { HotelComponent } from './hotel/hotel.component';
import { HomeComponent } from './users-servers/home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent },
  { path: 'biding', component: DataBindingComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'hotel', component: HotelComponent },
  // { path: 'users-servers', component: UsersServersComponent },
  { path: 'users-servers', component: HomeComponent },
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
