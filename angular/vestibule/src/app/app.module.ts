import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { ServicesStatusComponent } from './panel/services-status/services-status.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ShowsModule } from "./shows/shows.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { CookieService } from "ngx-cookie-service";
import { TokenInterceptor } from "./authentication/token.interceptor";
import { TorrentsModule } from "./torrents/torrents.module";
import { FindModule } from "./find/find.module";
import {ReactiveFormsModule} from "@angular/forms";
import { ShowPreviewComponent } from './dashboard/show-preview/show-preview.component';
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    ServicesStatusComponent,
    DashboardComponent,
    ShowPreviewComponent
  ],
    imports: [
        BrowserModule,
        ShowsModule,
        FindModule,
        TorrentsModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        SharedModule,
    ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
