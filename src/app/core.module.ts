import { ErrorHandler, NgModule, inject, provideAppInitializer } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { APP_CONFIG, APP_SERVICE_CONFIG } from './app-config/app-config.service';
import { AuthRecipesInterceptorService } from './recipes/auth/auth-recipes-interceptor.service';
import { AuthInterceptorService } from './http/auth-interceptor.service';
import { LoggingInterceptorService } from './http/logging-interceptor.service';
import { InitService } from './hotel/rooms/init.service';
import { ErrorHandlerService } from './services/error-handler.service';

import { RequestInterceptor } from './hotel/rooms/request.interceptor';

function initFactory(initService: InitService) {
  return () => initService.init();
}

@NgModule({
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthRecipesInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorService,
      multi: true,
    },
    provideAppInitializer(() => {
        const initializerFn = (initFactory)(inject(InitService));
        return initializerFn();
      }),
    { provide: ErrorHandler, useClass: ErrorHandlerService },
  ],
})
export class CoreModule { }
