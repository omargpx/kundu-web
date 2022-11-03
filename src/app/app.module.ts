import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { Router } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './auth/login/login.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { ComponentsModule } from './components/components.module';
import { DashboardComponent } from './pages/home/dashboard/dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { GolManagementComponent } from './pages/home/gol-management/gol-management.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UserManagementComponent } from './pages/home/user-management/user-management.component';

import * as Sentry from "@sentry/angular";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    HomeComponent,
    DashboardComponent,
    GolManagementComponent,
    UserManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    ComponentsModule,
    NgApexchartsModule,
    MatDialogModule,
    HttpClientModule,
    FlexLayoutModule.withConfig({ addOrientationBps: true }),
  ],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true,
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
