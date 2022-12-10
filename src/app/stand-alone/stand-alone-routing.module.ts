import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandAloneComponent } from './stand-alone.component';

const routes: Routes = [{ path: '', component: StandAloneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandAloneRoutingModule { }
