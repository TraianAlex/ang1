import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppDirectivesModule } from '../app-directives/app-directives.module';
import { DataBindingRoutingModule } from './data-binding-routing.module';

import { DataBindingComponent } from './data-binding.component';
import { GameControlComponent } from './game-control/game-control.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';

@NgModule({
  declarations: [DataBindingComponent, GameControlComponent, EvenComponent, OddComponent],
  imports: [CommonModule, DataBindingRoutingModule, AppDirectivesModule],
})
export class DataBindingModule {}
