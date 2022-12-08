import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { HeaderAppModule } from './header-app/header-app.module';
import { RecipesModule } from './recipes/recipes.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { ServersModule } from './servers/servers.module';

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
import { UsersComponent } from './users/users.component';
import { ActiveUsersComponent } from './users/active-users/active-users.component';
import { InactiveUsersComponent } from './users/inactive-users/inactive-users.component';
import { UsersServersHeaderComponent } from './users-servers/header/users-servers-header.component';
import { UsersComponent2 } from './users-servers/users/users2.component';
import { UserComponent } from './users-servers/users/user/user.component';
import { ServersComponent2 } from './users-servers/servers/servers2.component';
import { ServerComponent } from './users-servers/servers/server/server.component';
import { EditServerComponent } from './users-servers/servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './users-servers/page-not-found/page-not-found.component';
import { HomeComponent } from './users-servers/home/home.component';
import { ErrorPageComponent } from './users-servers/error-page/error-page.component';
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
    UsersComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    UsersServersHeaderComponent,
    UsersComponent2,
    UserComponent,
    ServersComponent2,
    ServerComponent,
    EditServerComponent,
    PageNotFoundComponent,
    HomeComponent,
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
