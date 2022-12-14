import { NgModule } from '@angular/core';

import { StandAloneRoutingModule } from './stand-alone-routing.module';

import { StandAloneComponent } from './stand-alone.component';

// 1. removed SharedModule becouse is used in only stand alone comp DetailsComponent, move DetailsComponent from declarations to imports
// 2. DetailsComponent removed from imports since welcome comp is standalone, WelcomeComponent remove from declarations to imports
// 3. make StandAloneComponent standalone and move it to imports and remove WelcomeComp from imports
// 4. remove DashboardModule from imports, lazy load the dashbord routes differently
@NgModule({
  declarations: [],
  imports: [StandAloneRoutingModule, StandAloneComponent],
})
export class StandAloneModule {}
