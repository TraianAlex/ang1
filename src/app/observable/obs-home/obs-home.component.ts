import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { autoUnsubscribe, UnsubscribeOnDestroy } from 'src/app/shared/decorators/auto-unsubscribe';

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
//@autoUnsubscribe
export class ObsHomeComponent implements OnInit {
  @UnsubscribeOnDestroy()
  private firstObsSubscription!: Subscription;
  private firstCustomObsSubscription!: Subscription;

  temp: number = 0;
  tempCustom: number | string = 0;

  constructor() {
    this.firstObsSubscription = new Subscription();
  }

  ngOnInit(): void {
    this.firstObsSubscription.add(
      interval(1000).subscribe((count) => {
        console.log('count1', count);
        this.temp = count;
      })
    );

    this.firstObsSubscription.add(
      interval(1000).subscribe((count) => {
        console.log('count2', count);
        this.temp = count;
        // if (count === 10) {
        //   this.firstObsSubscription.unsubscribe();
        // }
      })
    );

    const customIntervalObservable = new Observable((observer: Observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }
        if (count > 5) {
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
      .subscribe({
        next: (data: number | string) => {
          console.log(data);
          this.tempCustom = data;
        },
        error: (error: { message: string }) => {
          console.log(error);
          this.tempCustom = error.message;
          alert(error.message);
        },
        complete: () => {
          console.log('Completed!');
        },
      });
  }

  changeTemp() {
    this.temp = this.temp + 100;
  }

  //ngOnDestroy(): void {
  //this.firstObsSubscription.unsubscribe();
  //this.firstCustomObsSubscription.unsubscribe();
  //}
}
