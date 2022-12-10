import { Component, OnInit } from '@angular/core';

import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  standalone: true,
  imports: [WelcomeComponent],
  selector: 'app-stand-alone',
  templateUrl: './stand-alone.component.html',
  styleUrls: ['./stand-alone.component.scss'],
})
export class StandAloneComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
