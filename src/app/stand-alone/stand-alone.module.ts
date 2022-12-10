import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandAloneRoutingModule } from './stand-alone-routing.module';
// import { SharedModule } from './shared/shared.module';

import { StandAloneComponent } from './stand-alone.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DetailsComponent } from './welcome/details/details.component';

@NgModule({
  declarations: [StandAloneComponent, WelcomeComponent],
  imports: [CommonModule, StandAloneRoutingModule, DetailsComponent], // removed SharedModule becasue is used in only stand alone comp DetailsComponent
})
export class StandAloneModule {}
