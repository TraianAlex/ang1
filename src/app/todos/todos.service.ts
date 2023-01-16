import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { AppConfig } from '../app-config/app-config.interface';
import { APP_SERVICE_CONFIG } from '../app-config/app-config.service';

export type Todo = {
  id?: number | string;
  text: string;
  day: string;
  completed: boolean;
  reminder: boolean;
};

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todoAdded = new Subject<Todo>();
  config: AppConfig = inject(APP_SERVICE_CONFIG); // @Inject(APP_SERVICE_CONFIG) private config: AppConfig,

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.config.apiEndpoint}/todos`);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.config.apiEndpoint}/todos`, todo, httpOptions);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.config.apiEndpoint}/todos/${todo.id}`, todo, httpOptions);
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(`${this.config.apiEndpoint}/todos/${todo.id}`);
  }
}
