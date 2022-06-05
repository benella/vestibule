import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TorrentsRoutingModule } from './torrents-routing.module';
import { MovieTorrentComponent } from './movie-torrent/movie-torrent.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    MovieTorrentComponent
  ],
  exports: [
    MovieTorrentComponent
  ],
  imports: [
    CommonModule,
    TorrentsRoutingModule,
    BrowserAnimationsModule
  ]
})
export class TorrentsModule { }
