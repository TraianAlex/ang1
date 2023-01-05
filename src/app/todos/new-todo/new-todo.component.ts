import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

import { Todo, TodosService } from '../todos.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss'],
})
export class NewTodoComponent implements OnInit {
  //private subject = new Subject<any>();
  showAddTodo: boolean = false;
  @ViewChild('desc', { static: false }) desc!: ElementRef;
  @ViewChild('daytime', { static: false }) day!: ElementRef;
  title: string = 'To Do';

  constructor(private todoService: TodosService) {}

  ngOnInit(): void {}

  toggleAddTask() {
    this.showAddTodo = !this.showAddTodo;
    //this.subject.next(this.showAddTodo);
  }

  keyPressed($event: { which: number }, input: any) {
    if ($event.which === 13) {
      this.addItem(input, '');
    }
  }

  addItem(text: string, day: string) {
    if (!text || !day) return;
    const newTodo = {
      text,
      day,
      completed: false,
      reminder: true,
    };
    this.todoService.addTodo(newTodo).subscribe((todo) => {
      this.todoService.todoAdded.next(todo);
    });
    this.desc.nativeElement.value = '';
    this.day.nativeElement.value = '';
  }
}
