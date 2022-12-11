import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  standalone: true,
  imports: [WelcomeComponent, RouterModule],
  selector: 'app-stand-alone',
  templateUrl: './stand-alone.component.html',
})
export class StandAloneComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
