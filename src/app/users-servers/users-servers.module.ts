import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersServersRoutingModule } from './users-servers-routing.module';

import { HomeComponent } from './home/home.component';
import { UsersServersHeaderComponent } from './header/users-servers-header.component';
import { UsersComponent2 } from './users/users2.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent2 } from './servers/servers2.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';

@NgModule({
  declarations: [
    HomeComponent,
    UsersServersHeaderComponent,
    UsersComponent2,
    UserComponent,
    ServersComponent2,
    ServerComponent,
    EditServerComponent,
  ],
  imports: [CommonModule, UsersServersRoutingModule, FormsModule],
})
export class UsersServersModule {}
