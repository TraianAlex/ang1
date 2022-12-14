import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';

@NgModule({
  declarations: [UsersComponent, ActiveUsersComponent, InactiveUsersComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: 'users', component: UsersComponent }])],
})
export class UsersModule {}
