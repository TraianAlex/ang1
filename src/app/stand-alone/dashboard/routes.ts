// import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { TodayComponent } from './today/today.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: DashboardComponent,
//   },
//   {
//     path: 'today',
//     component: TodayComponent,
//   },
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class DashboardRoutingModule {}

export const DASHBOARD_ROUTES: Route[] = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'today',
    component: TodayComponent,
  },
];
