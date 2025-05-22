import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { CommentRoutingModule } from './comment-routing.module';

import { CommentComponent } from './comment.component';

@NgModule({ declarations: [CommentComponent], imports: [CommonModule, CommentRoutingModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class CommentModule {}
