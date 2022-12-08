import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { DropdownDirective } from './dropdown/dropdown.directive';

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
