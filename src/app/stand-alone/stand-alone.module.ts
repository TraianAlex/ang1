import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandAloneRoutingModule } from './stand-alone-routing.module';
import { DashboardModule } from './dashboard/dashboard.module-not-used';

import { StandAloneComponent } from './stand-alone.component';

// 1. removed SharedModule becouse is used in only stand alone comp DetailsComponent, move DetailsComponent from declarations to imports
// 2. DetailsComponent removed from imports since welcome comp is standalone, WelcomeComponent remove from declarations to imports
// 3. make StandAloneComponent standalone and move it to imports and remove WelcomeComp from imports
@NgModule({
  declarations: [],
  imports: [CommonModule, StandAloneRoutingModule, StandAloneComponent], // DashboardModule
})
export class StandAloneModule {}
