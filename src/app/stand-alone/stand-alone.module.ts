import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandAloneRoutingModule } from './stand-alone-routing.module';
// import { SharedModule } from './shared/shared.module';

import { StandAloneComponent } from './stand-alone.component';
// import { WelcomeComponent } from './welcome/welcome.component';
// import { DetailsComponent } from './welcome/details/details.component';

// 1. removed SharedModule becasue is used in only stand alone comp DetailsComponent, move DetailsComponent from declarations to imports
// 2. DetailsComponent removed from imports since welcome comp is standalone, WelcomeComponent remove from declarations to imports
// 3. make StandAloneComponent standalone and move it to imports and remove WelcomeComp from imports 
@NgModule({
  declarations: [],
  imports: [CommonModule, StandAloneRoutingModule, StandAloneComponent],
})
export class StandAloneModule {}
