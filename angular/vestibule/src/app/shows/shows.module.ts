import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ShowsRoutingModule } from './shows-routing.module';
import { ShowsListComponent } from './shows-list.component';
import { PosterStripComponent } from './poster-strip/poster-strip.component';
import { ShowDetailsComponent } from './show-details.component';
import { PluralPipePipe } from "../pipes/plural-pipe.pipe";
import { ShowDetailsTabComponent } from './show-details-tab/show-details-tab.component';
import { ShowDetailsTabsComponent } from './show-details-tabs/show-details-tabs.component';
import { ShowProfileComponent } from './show-profile/show-profile.component';
import { ReactiveFormsModule } from "@angular/forms";
import { CookieModule } from 'ngx-cookie';
import { SharedModule } from "../shared/shared.module";
import { ShowTorrentsComponent } from './show-torrents/show-torrents.component';
import { ShowTorrentComponent } from './show-torrents/show-torrent/show-torrent.component';
import { ShowTorrentsSectionComponent } from './show-torrents/show-torrents-section/show-torrents-section.component';

@NgModule({
  declarations: [
    PluralPipePipe,
    ShowsListComponent,
    PosterStripComponent,
    ShowDetailsComponent,
    ShowDetailsTabComponent,
    ShowDetailsTabsComponent,
    ShowProfileComponent,
    ShowTorrentsComponent,
    ShowTorrentComponent,
    ShowTorrentsSectionComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    ShowsRoutingModule,
    ReactiveFormsModule,
    CookieModule,
  ]
})
export class ShowsModule { }
