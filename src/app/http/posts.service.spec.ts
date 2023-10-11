import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { APP_SERVICE_CONFIG } from '../app-config/app-config.service';
import { PostsService } from './posts.service';
import { AppConfig } from '../app-config/app-config.interface';
import { Post } from './post.model';

describe('PostsService', () => {
  let service: PostsService;
  let httpMock: HttpTestingController;
  let config: AppConfig;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PostsService,
        { provide: APP_SERVICE_CONFIG, useValue: { apiEndpoint: 'https://jsonplaceholder.typicode.com' } },
      ],
    });
    service = TestBed.inject(PostsService);
    httpMock = TestBed.inject(HttpTestingController);
    config = TestBed.inject(APP_SERVICE_CONFIG);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a post', () => {
    const postData: Post = { title: 'Test Post', content: 'Test Content' };
    service.createAndStorePost(postData.title, postData.content);
    const req = httpMock.expectOne(`${config.apiEndpoint}/posts`);
    expect(req.request.method).toBe('POST');
    req.flush({ name: 'Test Post' });
  });

  it('should fetch posts', () => {
    const dummyPosts: { [key: string]: Post } = {
      post1: { title: 'Test Post 1', content: 'Test Content 1', id: 'post1' },
      post2: { title: 'Test Post 2', content: 'Test Content 2', id: 'post2' },
    };
    service.fetchPosts().subscribe((posts) => {
      expect(posts.length).toBe(2);
      expect(posts).toEqual([dummyPosts['post1'], dummyPosts['post2']]);
    });
    const req = httpMock.expectOne(`${config.apiEndpoint}/posts?print=pretty&custom=key`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPosts);
  });

  it('should delete posts', () => {
    service.deletePosts().subscribe((event: any) => {
      // expect(event.type).toBe(4);
      // expect(event.body).toBe('Delete successful');
    });
    const req = httpMock.expectOne(`${config.apiEndpoint}/posts`);
    expect(req.request.method).toBe('DELETE');
    req.flush('Delete successful', { status: 200, statusText: 'OK' });
  });
});
