import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({ selector: 'app-active-users', templateUrl: './active-users.component.html', standalone: false })
export class ActiveUsersComponent implements OnInit {
  users!: string[];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.users = this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }
}
