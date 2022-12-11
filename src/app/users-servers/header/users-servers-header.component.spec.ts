import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersServersHeaderComponent } from './users-servers-header.component';

describe('UsersServersComponent', () => {
  let component: UsersServersHeaderComponent;
  let fixture: ComponentFixture<UsersServersHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersServersHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersServersHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
