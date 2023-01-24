import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private subject = new Subject<any>();

  constructor() {}

  setData(data: any): void {
    this.subject.next(data);
  }

  getData(): Observable<any> {
    return this.subject.asObservable();
  }

  clearData(): void {
    this.subject.next(null);
  }
}
