import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingButtonComponent } from './loading-button/loading-button.component';
import { ShowTorrentComponent } from "./show-torrent/show-torrent.component";
import { TorrentDownloadStatusComponent } from './torrent-download-status/torrent-download-status.component';
import { PluralPipePipe } from "./pipes/plural-pipe.pipe";


@NgModule({
  declarations: [
    PluralPipePipe,
    LoadingButtonComponent,
    ShowTorrentComponent,
    TorrentDownloadStatusComponent
  ],
    exports: [
      PluralPipePipe,
      LoadingButtonComponent,
      ShowTorrentComponent,
      TorrentDownloadStatusComponent
    ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
