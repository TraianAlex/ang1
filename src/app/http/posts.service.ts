import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, Subject, tap, throwError } from 'rxjs';

import { APP_SERVICE_CONFIG } from 'src/app/app-config/app-config.service';

import { AppConfig } from '../app-config/app-config.interface';

import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private config: AppConfig = inject(APP_SERVICE_CONFIG); // @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
  headers = new HttpHeaders({ token: '123456' });
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http
      .post<{ name: string }>(`${this.config.apiEndpoint}/posts`, postData, {
        // firebaseEndPoint
        observe: 'response', // body(default) return data extracted and converted to js object automatically
      })
      .subscribe({
        next: (responseData) => {
          console.log(responseData);
        },
        error: (error) => {
          this.error.next(error.message);
        },
      });
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    return this.http
      .get<{ [key: string]: Post }>(`${this.config.apiEndpoint}/posts`, {
        // firebaseEndPoint
        headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
        params: searchParams,
        responseType: 'json', // text, blob
      })
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError((errorRes) => {
          // Send to analytics server
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http
      .delete(`${this.config.apiEndpoint}/posts`, {
        // firebaseEndPoint
        observe: 'events',
        responseType: 'text',
      })
      .pipe(
        tap((event) => {
          console.log(event);
          if (event.type === HttpEventType.Sent) {
            // ...
          }
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        })
      );
  }
}
