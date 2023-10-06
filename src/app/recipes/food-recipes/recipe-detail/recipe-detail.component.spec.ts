import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { RecipeDetailComponent } from './recipe-detail.component';
import { fakeActivatedRoute } from 'src/app/test-utils/moks';

describe('RecipeDetailComponent', () => {
  let component: RecipeDetailComponent;
  let fixture: ComponentFixture<RecipeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
