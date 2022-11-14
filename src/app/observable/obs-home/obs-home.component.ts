import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

type Observer = {
  next: (arg0: number) => void;
  complete: () => void;
  error: (arg0: Error) => void;
};

@Component({
  selector: 'app-obs-home',
  templateUrl: './obs-home.component.html',
  styleUrls: ['./obs-home.component.scss'],
})
export class ObsHomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription!: Subscription;
  private firstCustomObsSubscription!: Subscription;

  temp: number = 0;
  tempCustom: number | string = 0;

  constructor() {}

  ngOnInit(): void {
    this.firstObsSubscription = interval(1000).subscribe((count) => {
      console.log(count);
      this.temp = count;
    });

    const customIntervalObservable = Observable.create((observer: Observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater 3!'));
        }
        count++;
      }, 1000);
    });

    //this.firstCustomObsSubscription = customIntervalObservable.subscribe(
    this.firstCustomObsSubscription = customIntervalObservable
      .pipe(
        filter((data: number) => {
          return data > 0;
        }),
        map((data: number) => {
          return 'Round: ' + (data + 1);
        })
      )
      .subscribe(
        (data: number) => {
          console.log(data);
          this.tempCustom = data;
        },
        (error: { message: string }) => {
          console.log(error);
          this.tempCustom = error.message;
          alert(error.message);
        },
        () => {
          console.log('Completed!');
        }
      );
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
    this.firstCustomObsSubscription.unsubscribe();
  }
}
