import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersServersComponent } from './users-servers.component';

describe('UsersServersComponent', () => {
  let component: UsersServersComponent;
  let fixture: ComponentFixture<UsersServersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersServersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
