import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { DropdownDirective } from './dropdown/dropdown.directive';

import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [AlertComponent, PlaceholderDirective, LoadingSpinnerComponent, DropdownDirective],
  imports: [CommonModule],
  exports: [
    CommonModule,
    AlertComponent,
    PlaceholderDirective,
    LoadingSpinnerComponent,
    DropdownDirective,
  ],
})
export class SharedModule {}
