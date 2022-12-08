import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorPageComponent } from './error-page/error-page.component';
import { ObservableComponent } from './observable/observable.component';
import { ObsHomeComponent } from './observable/obs-home/obs-home.component';
import { ObsUserComponent } from './observable/obs-user/obs-user.component';
import { FormsComponent } from './forms/forms.component';
import { FormsReactiveComponent } from './forms-reactive/forms-reactive.component';
import { FormsReactive2Component } from './forms-reactive2/forms-reactive2.component';
import { PipesComponent } from './pipes/pipes.component';
import { HttpComponent } from './http/http.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'binding', pathMatch: 'full' },
  { path: 'post', component: HttpComponent },
  {
    path: 'hotel',
    loadChildren: () => import('./hotel/hotel-rooms.module').then((m) => m.HotelRoomsModule),
  },
  {
    path: 'observable',
    component: ObservableComponent,
    children: [
      { path: '', component: ObsHomeComponent },
      { path: 'user/:id', component: ObsUserComponent },
    ],
  },
  { path: 'forms', component: FormsComponent },
  { path: 'reactive', component: FormsReactiveComponent },
  { path: 'reactive2', component: FormsReactive2Component },
  { path: 'pipes', component: PipesComponent },
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  declarations: [],
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
