import { Component, OnInit } from '@angular/core';

import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  standalone: true,
  imports: [NavigationComponent],
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
