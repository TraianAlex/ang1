import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { DashboardRoutingModule } from './routes';
import { TodayComponent } from './today/today.component';
// import { DashboardComponent } from './dashboard.component';
import { NavigationComponent } from '../navigation/navigation.component';

@NgModule({
  declarations: [], // DashboardComponent
  imports: [CommonModule, NavigationComponent, TodayComponent], // DashboardRoutingModule
})
export class DashboardModule {}
