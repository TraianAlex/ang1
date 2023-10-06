import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { APP_CONFIG, APP_SERVICE_CONFIG } from '../app-config/app-config.service';
import { HttpComponent } from './http.component';

describe('HttpComponent', () => {
  let component: HttpComponent;
  let fixture: ComponentFixture<HttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HttpComponent, NgForm],
      providers: [HttpClient, HttpHandler, { provide: APP_SERVICE_CONFIG, useValue: APP_CONFIG }],
    }).compileComponents();

    fixture = TestBed.createComponent(HttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
