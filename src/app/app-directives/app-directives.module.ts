import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicHighlightDirective } from './basic-highlights/basic-hightlight.directive';
import { BetterHighlightDirective } from './better-highlights/better-hightlight.directive';
import { UnlessDirective } from './unless/unless.directive';
import { HoverDirective } from './hover/hover.directive';
import { EmailvalidatorDirective } from './email-validator/emailvalidator.directive';

@NgModule({
  declarations: [
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    HoverDirective,
    EmailvalidatorDirective,
  ],
  imports: [CommonModule],
  exports: [
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    HoverDirective,
    EmailvalidatorDirective,
  ],
})
export class AppDirectivesModule {}
