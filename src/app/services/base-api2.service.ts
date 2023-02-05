import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export class BaseApiService {
  constructor(private http: HttpClient) {}

  get(url: string): Observable<any> {
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  post(url: string, body: any): Observable<any> {
    return this.http.post(url, body).pipe(catchError(this.handleError));
  }

  patch(url: string, body: any): Observable<any> {
    return this.http.patch(url, body).pipe(catchError(this.handleError));
  }

  delete(url: string): Observable<any> {
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  };
}
