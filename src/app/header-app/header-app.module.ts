import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { HeaderAppComponent } from './header-app.component';

@NgModule({
  declarations: [HeaderAppComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [HeaderAppComponent],
})
export class HeaderAppModule {}
