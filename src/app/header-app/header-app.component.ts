import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-app',
  templateUrl: './header-app.component.html',
})
export class HeaderAppComponent implements OnInit {
  collapsed = true;
  title: string = '';

  constructor() {}

  ngOnInit(): void {}
}
