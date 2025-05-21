import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Post {
  title: string;
  body: string;
  id: number;
  userId: number;
}

@Component({ selector: 'app-posts', templateUrl: './posts.component.html', standalone: false })
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((fetchedPosts) => (this.posts = fetchedPosts));
  }
}
