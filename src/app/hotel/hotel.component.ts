import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
})
export class HotelComponent implements OnInit {
  role = 'user';

  @ViewChild('name', { static: true }) name!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    this.name.nativeElement.innerText = 'Hilton hotel';
  }
}
