import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ServersComponent } from './servers.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';

@NgModule({
  declarations: [ServersComponent, CockpitComponent, ServerElementComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: 'servers', component: ServersComponent }]),
  ],
  exports: [ServersComponent, CockpitComponent, ServerElementComponent],
})
export class ServersModule {}
