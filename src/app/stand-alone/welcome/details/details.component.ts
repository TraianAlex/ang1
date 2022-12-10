import { Component, OnInit } from '@angular/core';

import { AnalyticsService } from '../../shared/analytics.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit(): void {}

  onClick() {
    this.analyticsService.registerClick();
  }
}
