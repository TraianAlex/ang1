import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { TodayComponent } from './today/today.component';
import { DashboardComponent } from './dashboard.component';
import { NavigationComponent } from '../navigation/navigation.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, NavigationComponent, TodayComponent],
})
export class DashboardModule {}
