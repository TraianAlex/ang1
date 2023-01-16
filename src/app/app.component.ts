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
 import { Subject } from 'rxjs';

    const subject = new Subject();
    export const dataService = {
      setData: (d: boolean) => subject.next({ value: d }),
      clearData: () => subject.next(),
      getData: () => subject.asObservable()
    };
-------------------------------------------------
  const showAdvanceSearch = props.expandedRow ? true : false;
  dataService.setData(showAdvanceSearch);
-----------------------------------------------------
  import { dataService } from "../table/table";

  const [showAdvanceSearch, setShowAdvanceSearch] = useState(true)
    dataService.getData().subscribe((message: any) => {
      setShowAdvanceSearch(message.value);
    });
*/
