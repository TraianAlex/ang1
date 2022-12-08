import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditServerComponent } from './servers/edit-server/edit-server.component';

import { ServerResolverService } from './services/server-resolver.service';
import { AuthGuardService } from './services/auth-guard.service';
import { CanDeactivateGuardService } from './services/can-deactivate-guard.service';

import { ServerComponent } from './servers/server/server.component';
import { ServersComponent2 } from './servers/servers2.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent2 } from './users/users2.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersServersRoutingModule {}
