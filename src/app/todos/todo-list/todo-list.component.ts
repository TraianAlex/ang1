import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Subscription } from 'rxjs';

import { Todo, TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  standalone: false,
})
export class TodoListComponent implements OnInit, OnDestroy {
  private todoService = inject(TodosService);
  private todosSub = new Subscription();
  items: Todo[] = [];

  ngOnInit(): void {
    this.todosSub.add(this.todoService.todoAdded.subscribe((todo) => (this.items = [...this.items, todo])));
    this.todosSub.add(this.todoService.getTodos().subscribe((todos) => (this.items = todos)));
  }

  setCompleted(item: Todo, checked: boolean): void {
    item.completed = checked;
    this.todoService.updateTodo(item).subscribe((todo) => {
      this.items = this.items.filter((item) => item.id !== todo.id).concat(todo);
    });
  }

  completeAll() {
    this.items.forEach((item) => {
      if (item.completed !== true) {
        this.setCompleted(item, true);
      }
    });
  }

  removeItem(item: Todo) {
    this.items.splice(this.items.indexOf(item), 1);
    this.todoService.deleteTodo(item).subscribe();
  }

  ngOnDestroy(): void {
    this.todosSub.unsubscribe();
  }
}
