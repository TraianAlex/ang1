import { NgModule } from '@angular/core';

import { HighlightDirective } from './highlight.directive';

// not use since HighlightDirective is stand alone
@NgModule({
  declarations: [HighlightDirective],
  exports: [HighlightDirective],
})
export class SharedModule {}
