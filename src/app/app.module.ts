import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { HeaderAppModule } from './header-app/header-app.module';
import { RecipesModule } from './recipes/recipes.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { ServersModule } from './servers/servers.module';
import { UsersModule } from './users/users.module';
import { UsersServersModule } from './users-servers/users-servers.module';

import { APP_CONFIG, APP_SERVICE_CONFIG } from './app-config/app-config.service';
import { InitService } from './hotel/rooms/init.service';
import { ErrorHandlerService } from './services/error-handler.service';
import { LoggingInterceptorService } from './http/logging-interceptor.service';
import { AuthInterceptorService } from './http/auth-interceptor.service';
import { AuthRecipesInterceptorService } from './recipes/auth/auth-recipes-interceptor.service';

import { RequestInterceptor } from './hotel/rooms/request.interceptor';

import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { SortPipe } from './pipes/sort.pipe';

import { AppComponent } from './app.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountComponent } from './accounts/account/account.component';
import { NewAccountComponent } from './accounts/new-account/new-account.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ObservableComponent } from './observable/observable.component';
import { ObsHomeComponent } from './observable/obs-home/obs-home.component';
import { ObsUserComponent } from './observable/obs-user/obs-user.component';
import { FormsComponent } from './forms/forms.component';
import { FormsReactiveComponent } from './forms-reactive/forms-reactive.component';
import { FormsReactive2Component } from './forms-reactive2/forms-reactive2.component';
import { PipesComponent } from './pipes/pipes.component';
import { HttpComponent } from './http/http.component';

function initFactory(initService: InitService) {
  return () => initService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    AccountComponent,
    NewAccountComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    ObservableComponent,
    ObsHomeComponent,
    ObsUserComponent,
    FormsComponent,
    FormsReactiveComponent,
    FormsReactive2Component,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    ReversePipe,
    SortPipe,
    HttpComponent,
  ],
  imports: [
    BrowserModule,
    RecipesModule,
    DataBindingModule,
    ServersModule,
    UsersModule,
    UsersServersModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HeaderAppModule,
  ],
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
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi: true,
    },
    { provide: ErrorHandler, useClass: ErrorHandlerService },
  ],
  bootstrap: [AppComponent],
  // entryComponents: [AlertComponent], // for angular < 9
})
export class AppModule {}
