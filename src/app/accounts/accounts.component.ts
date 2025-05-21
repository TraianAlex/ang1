import { Component, OnInit } from '@angular/core';
import { AccountsService } from './services/accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
  standalone: false,
})
export class AccountsComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];
  // accounts = [
  //   {
  //     name: 'Master Account',
  //     status: 'active',
  //   },
  //   {
  //     name: 'Testaccount',
  //     status: 'inactive',
  //   },
  //   {
  //     name: 'Hidden Account',
  //     status: 'unknown',
  //   },
  // ];

  constructor(private accountsService: AccountsService) {}

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }

  // onAccountAdded(newAccount: { name: string; status: string }) {
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: { id: number; newStatus: string }) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }
}
