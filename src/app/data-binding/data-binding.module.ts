import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingRoutingModule } from './data-binding-routing.module';
import { DataBindingComponent } from './data-binding.component';
import { GameControlComponent } from './game-control/game-control.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { BasicHighlightDirective } from '../app-directives/basic-highlights/basic-hightlight.directive';
import { BetterHighlightDirective } from '../app-directives/better-highlights/better-hightlight.directive';
import { UnlessDirective } from '../app-directives/unless/unless.directive';

@NgModule({
  declarations: [
    DataBindingComponent,
    GameControlComponent,
    EvenComponent,
    OddComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
  ],
  imports: [CommonModule, DataBindingRoutingModule],
})
export class DataBindingModule {}
