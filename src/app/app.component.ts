import { Component, OnInit } from '@angular/core';
import { InitService } from './hotel/rooms/init.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private initService: InitService) {
    console.log('initService', initService.config);
  }

  ngOnInit(): void {}
}
