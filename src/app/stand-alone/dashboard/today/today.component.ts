import { Component, OnInit } from '@angular/core';

import { NavigationComponent } from '../../navigation/navigation.component';

@Component({
    imports: [NavigationComponent],
    selector: 'app-today',
    templateUrl: './today.component.html'
})
export class TodayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
