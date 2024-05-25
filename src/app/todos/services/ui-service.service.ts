import { Injectable, inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { DataService } from 'src/app/services/data-service.service';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private subject = new Subject();
  //private dataService = inject(DataService<boolean>);
  private showAddTask: boolean = false;

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(!this.showAddTask);
    //this.dataService.setData(this.showAddTask);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
    //return this.dataService.getData();
  }
}
