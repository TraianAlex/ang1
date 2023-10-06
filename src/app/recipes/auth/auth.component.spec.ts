import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { APP_CONFIG, APP_SERVICE_CONFIG } from 'src/app/app-config/app-config.service';
import { AuthComponent } from './auth.component';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthComponent, NgForm],
      providers: [HttpClient, HttpHandler, { provide: APP_SERVICE_CONFIG, useValue: APP_CONFIG }],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
