import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [RouterModule, NavigationComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
