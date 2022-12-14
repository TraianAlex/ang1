import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CommentRoutingModule } from './comment-routing.module';

import { CommentComponent } from './comment.component';

@NgModule({
  declarations: [CommentComponent],
  imports: [CommonModule, CommentRoutingModule, HttpClientModule],
})
export class CommentModule {}
