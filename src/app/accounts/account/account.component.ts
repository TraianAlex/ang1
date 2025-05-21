import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  standalone: false,
})
export class AccountComponent implements OnInit {
  @Input() account!: { name: string; status: string };
  @Input() id!: number;
  // @Output() statusChanged = new EventEmitter<{ id: number; newStatus: string }>();

  constructor(private accountsService: AccountsService) {}

  ngOnInit(): void {}

  onSetTo(status: string) {
    //this.statusChanged.emit({ id: this.id, newStatus: status });
    this.accountsService.updateStatus(this.id, status);
    this.accountsService.statusUpdated.emit(status); // trigger the alert subscribe from new-account
  }
}
