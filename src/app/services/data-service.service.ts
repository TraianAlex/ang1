import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService<T> {
  private subject = new Subject<T>();
  //private subject: Subject<T> = new BehaviorSubject<T>(null as unknown as T);

  state$ = this.subject.asObservable();

  setData(data: T): void {
    this.subject.next(data);
  }

  getData(): Observable<T> {
    return this.subject.asObservable();
  }

  clearData(): void {
    this.subject.next(null as unknown as T);
  }
}
