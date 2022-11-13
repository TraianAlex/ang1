import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users2',
  templateUrl: './users2.component.html',
  styleUrls: ['./users2.component.scss'],
})
export class UsersComponent2 implements OnInit {
  users = [
    {
      id: 1,
      name: 'Max',
    },
    {
      id: 2,
      name: 'Anna',
    },
    {
      id: 3,
      name: 'Chris',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
