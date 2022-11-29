import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAppComponent } from './header-app.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HeaderAppComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [HeaderAppComponent],
})
export class HeaderAppModule {}
