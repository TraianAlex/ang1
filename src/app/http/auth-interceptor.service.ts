import { tap } from 'rxjs/operators';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modifiedRequest = req.clone({
      headers: req.headers.append('Access-Control-Allow-Origin', '*'),
    });
    console.log('auth interceptor', modifiedRequest);
    return next.handle(modifiedRequest).pipe(
      tap((event) => {
        console.log('event', event);
        if (event.type === HttpEventType.Response) {
          console.log('Response arrived, body data: ', event.body);
        }
      })
    );
  }
}
