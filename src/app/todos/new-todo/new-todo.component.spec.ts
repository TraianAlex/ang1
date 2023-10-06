import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { NewTodoComponent } from './new-todo.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from 'src/app/app-config/app-config.service';

describe('NewTodoComponent', () => {
  let component: NewTodoComponent;
  let fixture: ComponentFixture<NewTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewTodoComponent],
      providers: [HttpClient, HttpHandler, { provide: APP_SERVICE_CONFIG, useValue: APP_CONFIG }],
    }).compileComponents();

    fixture = TestBed.createComponent(NewTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
