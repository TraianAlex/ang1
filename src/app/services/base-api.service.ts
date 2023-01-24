import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class SingleResponse {
  public status!: number;
  public IsSuccess!: boolean;
  public details!: string;
}

export class Responses {
  public errors: SingleResponse[] = [];
  public success: SingleResponse[] = [];
}

class Observer {
  next!: Function;
  error!: Function;
  complete!: Function;
}

@Injectable({
  providedIn: 'root',
})
export class BaseApiService {
  genericError = '';

  constructor(public http: HttpClient) {
    this.genericError = `Some Error occcured, Please contact Administrator for the Errors`;
  }

  get<T>(url: string): Observable<T> {
    let response = this.http.get<Responses & T>(url);
    return new Observable((observer: Observer) => {
      response.subscribe({
        next: (response) => {
          if (response.errors && response.errors.length > 0) observer.error(response.errors);
          else {
            observer.next(response.success);
          }
          observer.complete();
        },
        error: (error) => {
          observer.error([{ title: error.name, detail: this.genericError, error }]);
        },
      });
    });
  }

  post(url: string, body: object): Observable<Responses[]> {
    let response = this.http.post<Responses>(url, body);
    return new Observable((observer: Observer) => {
      response.subscribe({
        next: (res) => {
          if (res.errors.length > 0) observer.error(res.errors);
          else observer.next(res.success);
          observer.complete();
        },
        error: (error) => {
          observer.error([{ title: error.name, detail: this.genericError, error }]);
        },
      });
    });
  }

  delete(url: string): Observable<Responses[]> {
    let response = this.http.delete<Responses>(url);
    return new Observable((observer: Observer) => {
      response.subscribe({
        next: (res) => {
          if (res.errors.length > 0) observer.error(res.errors);
          else observer.next(res.success);
          observer.complete();
        },
        error: (error) => {
          observer.error([{ title: error.name, detail: this.genericError, error }]);
        },
      });
    });
  }
}
