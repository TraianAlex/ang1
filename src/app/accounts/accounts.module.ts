import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AccountsComponent } from './accounts.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';

@NgModule({
  declarations: [AccountsComponent, AccountComponent, NewAccountComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: 'accounts', component: AccountsComponent }]),
  ],
})
export class AccountsModule {}
