import { Component, OnInit } from '@angular/core';

import { AnalyticsService } from '../../shared/analytics.service';
import { HighlightDirective } from '../../shared/highlight.directive';
// import { SharedModule } from '../../shared/shared.module';

@Component({
  standalone: true,
  imports: [HighlightDirective], // SharedModule
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
