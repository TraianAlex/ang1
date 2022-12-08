import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core.module';
import { HeaderAppModule } from './header-app/header-app.module';
import { RecipesModule } from './recipes/recipes.module';
import { AccountsModule } from './accounts/accounts.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { ServersModule } from './servers/servers.module';
import { UsersModule } from './users/users.module';
import { UsersServersModule } from './users-servers/users-servers.module';

import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { SortPipe } from './pipes/sort.pipe';

import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
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
    AccountsModule,
    DataBindingModule,
    ServersModule,
    UsersModule,
    UsersServersModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HeaderAppModule,
    CoreModule,
  ],
  bootstrap: [AppComponent],
  // entryComponents: [AlertComponent], // for angular < 9
})
export class AppModule {}
