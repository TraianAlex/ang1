import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NewTodoComponent } from './new-todo/new-todo.component';

@NgModule({
  declarations: [TodosComponent, TodoListComponent, NewTodoComponent],
  imports: [CommonModule, TodosRoutingModule],
})
export class TodosModule {}
