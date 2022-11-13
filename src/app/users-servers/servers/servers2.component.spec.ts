import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersComponent2 } from './servers2.component';

describe('ServersComponent', () => {
  let component: ServersComponent2;
  let fixture: ComponentFixture<ServersComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServersComponent2],
    }).compileComponents();

    fixture = TestBed.createComponent(ServersComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
