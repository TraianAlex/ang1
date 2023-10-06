import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { TodoListComponent } from './todo-list.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from 'src/app/app-config/app-config.service';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      providers: [HttpClient, HttpHandler, { provide: APP_SERVICE_CONFIG, useValue: APP_CONFIG }],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should add a todo to the list', () => {
  //   component.addTodo('Test Todo');
  //   expect(component.todos.length).toBe(1);
  //   expect(component.todos[0].text).toBe('Test Todo');
  // });
});
