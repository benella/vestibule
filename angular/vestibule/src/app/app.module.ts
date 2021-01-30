import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { ServicesStatusComponent } from './panel/services-status/services-status.component';
import { HttpClientModule } from "@angular/common/http";
import { ShowsModule } from "./shows/shows.module";
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    ServicesStatusComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ShowsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
