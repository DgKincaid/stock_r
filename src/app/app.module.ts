import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { MaterialModule } from './module';

import { HomeModule, StockDetailModule, AlertsPageModule } from './pages';

// TODO: change project structure so each component has its own module
import { BannerComponent } from './components/banner/banner.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

import {
  StockSearchComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,

    BannerComponent,
    SideBarComponent,
    StockSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    FlexLayoutModule,

    MaterialModule,
    HomeModule,
    StockDetailModule,
    AlertsPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
