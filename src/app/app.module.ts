import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    HomeComponent,
    DashboardComponent,
    GolManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    ComponentsModule,
    NgApexchartsModule,
    MatDialogModule,
    FlexLayoutModule.withConfig({ addOrientationBps: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
