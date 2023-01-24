import { Component, OnInit } from '@angular/core';

import { AuthService } from './recipes/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.autoLogin();
  }
}

/*
export class DataService = {
  private subject = new Subject<any>();

  setData(d: any): void {
    this.subject.next(d);
  }

  clearData(): void {
    this.subject.next(null);
  }

  getData(): Observable<any> {
    return this.subject.asObservable();
  }
};
-------------------------------------------------
  showAdvanceSearch = condition ? true : false;

  constructor(dataService: DataService) {}

  onToggleTask() {
    this.dataService.setData(showAdvanceSearch);
  }
-----------------------------------------------------
  myVar: boolean = false;

  constructor(dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((data: any) => {
      this.myVal = data.value;
    });
  }
-----------------------------------------------------
const subject = new Subject();

export const dataService = {
  setData: (d: boolean) => subject.next({ value: d }),
  clearData: () => subject.next(),
  getData: () => subject.asObservable()
};
-------------------------------------------------
const showAdvanceSearch = condition ? true : false;

dataService.setData(showAdvanceSearch);
-----------------------------------------------------
const [data, setData] = useState(true);

dataService.getData().subscribe((message: any) => {
  setData(message.value);
});
*/
