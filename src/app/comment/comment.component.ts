import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs';
import { Comments } from './comment';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  //comments$ = this.commentService.getComments();
  comments$ = this.activatedRoute.data?.pipe(pluck('comments'));
  comments2!: Comments[];

  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data?.subscribe((data) => this.comments2 = data['comments']); // prefaching data
    console.log('comments2', this.comments2);
  }
}
