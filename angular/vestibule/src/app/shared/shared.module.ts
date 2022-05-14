import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingButtonComponent } from './loading-button/loading-button.component';
import { ShowTorrentComponent } from "./show-torrent/show-torrent.component";
import { TorrentDownloadStatusComponent } from './torrent-download-status/torrent-download-status.component';
import { PluralPipePipe } from "./pipes/plural-pipe.pipe";
import { PosterStripComponent } from "./poster-strip/poster-strip.component";


@NgModule({
  declarations: [
    PluralPipePipe,
    LoadingButtonComponent,
    ShowTorrentComponent,
    TorrentDownloadStatusComponent,
    PosterStripComponent
  ],
    exports: [
      PluralPipePipe,
      LoadingButtonComponent,
      ShowTorrentComponent,
      TorrentDownloadStatusComponent,
      PosterStripComponent
    ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
