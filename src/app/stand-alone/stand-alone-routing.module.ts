import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then((mod) => mod.AboutComponent),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      // import('./dashboard/dashboard-routing.module').then((mod) => mod.DashboardRoutingModule),
      import('./dashboard/routes').then((mod) => mod.DASHBOARD_ROUTES),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StandAloneRoutingModule {}
