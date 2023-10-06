import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { APP_CONFIG, APP_SERVICE_CONFIG } from 'src/app/app-config/app-config.service';

import { ContainerComponent } from './container.component';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContainerComponent],
      providers: [HttpClient, HttpHandler, { provide: APP_SERVICE_CONFIG, useValue: APP_CONFIG }],
    }).compileComponents();

    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
