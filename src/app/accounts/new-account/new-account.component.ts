import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
})
export class NewAccountComponent implements OnInit {
  // @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  constructor(private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe((status: string) =>
      alert('New Status: ' + status)
    );
  }

  ngOnInit(): void {}

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus,
    // });
    this.accountsService.addAccount(accountName, accountStatus);
  }
}
