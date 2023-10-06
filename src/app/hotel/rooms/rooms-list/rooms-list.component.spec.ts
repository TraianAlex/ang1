import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { APP_CONFIG, APP_SERVICE_CONFIG } from 'src/app/app-config/app-config.service';
import { FilterPipe } from '../../pipes/filter.pipe';
import { RoomsListComponent } from './rooms-list.component';

describe('RoomsListComponent', () => {
  let component: RoomsListComponent;
  let fixture: ComponentFixture<RoomsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomsListComponent, FilterPipe],
      providers: [HttpClient, HttpHandler, { provide: APP_SERVICE_CONFIG, useValue: APP_CONFIG }],
    }).compileComponents();

    fixture = TestBed.createComponent(RoomsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
