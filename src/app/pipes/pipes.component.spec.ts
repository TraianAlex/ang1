import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesComponent } from './pipes.component';
import { SortPipe } from './sort.pipe';
import { FilterPipe } from './filter.pipe';
import { ShortenPipe } from './shorten.pipe';
import { ReversePipe } from './reverse.pipe';

describe('PipesComponent', () => {
  let component: PipesComponent;
  let fixture: ComponentFixture<PipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipesComponent, SortPipe, FilterPipe, ShortenPipe, ReversePipe],
    }).compileComponents();

    fixture = TestBed.createComponent(PipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
