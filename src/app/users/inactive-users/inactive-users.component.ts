import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({ selector: 'app-inactive-users', templateUrl: './inactive-users.component.html', standalone: false })
export class InactiveUsersComponent implements OnInit {
  users!: string[];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }
}
