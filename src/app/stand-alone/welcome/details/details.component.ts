import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { AnalyticsService } from '../../shared/analytics.service';
import { HighlightDirective } from '../../shared/highlight.directive';

@Component({
    imports: [CommonModule, HighlightDirective], // SharedModule
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  serviceTriggered: boolean = false;

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit(): void {}

  onClick() {
    this.analyticsService.registerClick();
    this.serviceTriggered = !this.serviceTriggered;
  }
}
