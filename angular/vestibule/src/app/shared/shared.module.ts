import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingButtonComponent } from './loading-button/loading-button.component';
import { ShowTorrentComponent } from "./show-torrent/show-torrent.component";
import { TorrentDownloadStatusComponent } from './torrent-download-status/torrent-download-status.component';
import { PluralPipePipe } from "./pipes/plural-pipe.pipe";
import { PosterStripComponent } from "./poster-strip/poster-strip.component";
import { LoadingLineComponent } from './loading-line/loading-line.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    PluralPipePipe,
    LoadingButtonComponent,
    ShowTorrentComponent,
    TorrentDownloadStatusComponent,
    PosterStripComponent,
    LoadingLineComponent,
  ],
    exports: [
      PluralPipePipe,
      LoadingButtonComponent,
      ShowTorrentComponent,
      TorrentDownloadStatusComponent,
      PosterStripComponent,
      LoadingLineComponent,
    ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule { }
