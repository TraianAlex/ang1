import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss'],
})
export class HttpComponent implements OnInit, OnDestroy {
  @ViewChild('postForm', { static: false }) postForm!: NgForm;
  loadedPosts: Post[] = [];
  isFetching = false;
  error: string | null = null;
  private errorSub!: Subscription;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.errorSub = this.postsService.error.subscribe((errorMessage) => {
      this.error = errorMessage;
    });

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
    // this.http
    //   .post<{ name: string }>(environment.firebaseEndPoint, postData)
    //   .subscribe((responseData) => {
    //     console.log(responseData);
    //   });
    this.postsService.createAndStorePost(postData.title, postData.content);
    this.postForm.reset();
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe({
      next: (posts) => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      error: (error) => {
        this.isFetching = false;
        this.error = error.message;
        console.log(error);
      },
    });
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
    this.errorSub.unsubscribe();
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
