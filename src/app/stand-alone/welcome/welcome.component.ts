import { Component, OnInit } from '@angular/core';

import { NavigationComponent } from '../navigation/navigation.component';
import { DetailsComponent } from './details/details.component';

@Component({
    imports: [DetailsComponent, NavigationComponent],
    selector: 'app-welcome',
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
