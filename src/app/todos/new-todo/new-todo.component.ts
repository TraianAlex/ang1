import { Component, ElementRef, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { Subscription } from 'rxjs';

import { Todo, TodosService } from '../services/todos.service';
import { UiService } from '../services/ui-service.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss'],
})
export class NewTodoComponent implements OnInit, OnDestroy {
  private todoService = inject(TodosService);
  private uiService = inject(UiService);
  subscription = new Subscription();
  @ViewChild('description', { static: false }) description!: ElementRef;
  @ViewChild('daytime', { static: false }) day!: ElementRef;

  showAddTask: boolean = false;

  ngOnInit(): void {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  keyPressed($event: { which: number }, input: any) {
    if ($event.which === 13) {
      this.addItem(input, '');
    }
  }

  addItem(text: string, day: string) {
    if (!text || !day) return;
    const newTodo: Todo = {
      text,
      day,
      completed: false,
      reminder: true,
    };
    this.todoService.addTodo(newTodo).subscribe();
    //(todo) => {
    //this.todoService.todoAdded.next(todo);
    //});
    this.description.nativeElement.value = '';
    this.day.nativeElement.value = '';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
