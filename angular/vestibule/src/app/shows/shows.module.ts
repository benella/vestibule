import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ShowsRoutingModule } from './shows-routing.module';
import { ShowsListComponent } from './shows-list/shows-list.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ShowDetailsTabComponent } from './show-details/show-details-tab/show-details-tab.component';
import { ShowDetailsTabsComponent } from './show-details/show-details-tabs/show-details-tabs.component';
import { ShowProfileComponent } from './show-profile/show-profile.component';
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { ShowTorrentsComponent } from './show-torrents/show-torrents.component';
import { ShowTorrentsSectionComponent } from './show-torrents/show-torrents-section/show-torrents-section.component';
import { ShowsStatusGroupComponent } from './shows-list/shows-status-group/shows-status-group.component';

@NgModule({
  declarations: [
    ShowsListComponent,
    ShowDetailsComponent,
    ShowDetailsTabComponent,
    ShowDetailsTabsComponent,
    ShowProfileComponent,
    ShowTorrentsComponent,
    ShowTorrentsSectionComponent,
    ShowsStatusGroupComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    ShowsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ShowsModule { }
