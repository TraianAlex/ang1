import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { HttpComponent } from './http.component';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { APP_CONFIG, APP_SERVICE_CONFIG } from '../app-config/app-config.service';

describe('HttpComponent', () => {
  let component: HttpComponent;
  let fixture: ComponentFixture<HttpComponent>;
  let postsService: PostsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // imports: [HttpClientTestingModule],
      declarations: [HttpComponent, NgForm],
      providers: [
        FormsModule,
        PostsService,
        HttpClient,
        HttpHandler,
        { provide: APP_SERVICE_CONFIG, useValue: APP_CONFIG },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HttpComponent);
    component = fixture.componentInstance;
    postsService = TestBed.inject(PostsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch posts on init', () => {
    const posts: Post[] = [{ id: '1', title: 'Test Post', content: 'Test Content' }];
    spyOn(postsService, 'fetchPosts').and.returnValue(of(posts));
    component.ngOnInit();
    expect(component.loadedPosts).toEqual(posts);
  });

  it('should create a post', () => {
    const post: Post = { id: '1', title: 'Test Post', content: 'Test Content' };
    // @ts-ignore
    spyOn(postsService, 'createAndStorePost').and.returnValue(of([]));
    component.onCreatePost(post);
    //expect(component.loadedPosts).toContain(post);
    expect(postsService.createAndStorePost).toHaveBeenCalledWith(post.title, post.content);
  });

  it('should fetch posts on fetch button click', () => {
    const posts: Post[] = [{ id: '1', title: 'Test Post', content: 'Test Content' }];
    spyOn(postsService, 'fetchPosts').and.returnValue(of(posts));
    component.onFetchPosts();
    expect(component.loadedPosts).toEqual(posts);
  });

  it('should clear posts on clear button click', () => {
    spyOn(postsService, 'deletePosts').and.returnValue(of());
    component.onClearPosts();
    expect(component.loadedPosts).toEqual([]);
  });

  it('should clear error on handle error button click', () => {
    component.error = 'Test Error';
    component.onHandleError();
    expect(component.error).toBeNull();
  });

  it('should unsubscribe from error subscription on destroy', () => {
    spyOn(component.sub, 'unsubscribe');
    component.ngOnDestroy();
    expect(component.sub.unsubscribe).toHaveBeenCalled();
  });
});
