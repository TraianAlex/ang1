import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from 'src/app/services/data-service.service';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask: boolean = false;

  constructor(private dataService: DataService<boolean>) {}

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.dataService.setData(this.showAddTask);
  }

  onToggle(): Observable<any> {
    return this.dataService.getData();
  }
}
