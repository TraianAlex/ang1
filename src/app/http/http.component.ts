import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss'],
  standalone: false,
})
export class HttpComponent implements OnInit, OnDestroy {
  @ViewChild('postForm', { static: false }) postForm!: NgForm;
  loadedPosts: Post[] = [];
  isFetching = false;
  error: string | null = null;
  sub: Subscription = new Subscription();

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.sub.add(
      this.postsService.error.subscribe((errorMessage) => {
        this.error = errorMessage;
      })
    );

    this.isFetching = true;
    this.postsService.fetchPosts().subscribe({
      next: (posts) => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      error: (error) => {
        this.isFetching = false;
        this.error = error.message;
      },
    });
  }

  onCreatePost(postData: Post) {
    this.postsService.createAndStorePost(postData.title, postData.content);
    this.postForm.reset();
    this.onFetchPosts();
  }

  onFetchPosts() {
    this.isFetching = true;
    this.sub.add(
      this.postsService.fetchPosts().subscribe(
        (posts) => {
          this.isFetching = false;
          this.loadedPosts = posts;
        },
        (error) => {
          this.isFetching = false;
          this.error = error.message;
          console.log(error);
        }
      )
    );
  }

  onClearPosts() {
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  onHandleError() {
    this.error = null;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  // private fetchPosts() {
  //   this.isFetching = true;
  //   this.http
  //     .get<{ [key: string]: Post }>(environment.firebaseEndPoint)
  //     .pipe(
  //       map((responseData) => {
  //         const postsArray: Post[] = [];
  //         for (const key in responseData) {
  //           if (responseData.hasOwnProperty(key)) {
  //             postsArray.push({ ...responseData[key], id: key });
  //           }
  //         }
  //         return postsArray;
  //       })
  //     )
  //     .subscribe((posts) => {
  //       this.isFetching = false;
  //       this.loadedPosts = posts;
  //     });
  // }
}
