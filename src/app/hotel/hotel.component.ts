import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { InitService } from './rooms/init.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
})
export class HotelComponent implements OnInit {
  role = 'user';

  @ViewChild('name', { static: true }) name!: ElementRef;

  constructor(private initService: InitService, private router: Router) {
    console.log('initService', initService.config);
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => {
        console.log(' Nav started');
      });
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        console.log(' Nav completed');
      });
    this.name.nativeElement.innerText = 'Hilton hotel';
  }
}
