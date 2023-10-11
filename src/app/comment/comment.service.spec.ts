import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CommentService } from './comment.service';
import { Comments } from './comment';

describe('CommentService', () => {
  let service: CommentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommentService],
    });
    service = TestBed.inject(CommentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve comments from the API via GET', () => {
    const mockComments: Comments[] = [
      { postId: 1, id: 1, name: 'John Doe', email: 'johndoe@example.com', body: 'Lorem ipsum dolor sit amet' },
      { postId: 1, id: 2, name: 'Jane Doe', email: 'janedoe@example.com', body: 'Consectetur adipiscing elit' },
    ];

    service.getComments().subscribe((comments) => {
      expect(comments.length).toBe(2);
      expect(comments).toEqual(mockComments);
    });

    const request = httpMock.expectOne('https://jsonplaceholder.typicode.com/comments');
    expect(request.request.method).toBe('GET');
    request.flush(mockComments);
  });
});
