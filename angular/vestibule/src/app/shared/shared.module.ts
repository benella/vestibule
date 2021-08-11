import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingButtonComponent } from './loading-button/loading-button.component';
import { ShowTorrentComponent } from "./show-torrent/show-torrent.component";


@NgModule({
  declarations: [
    LoadingButtonComponent,
    ShowTorrentComponent
  ],
  exports: [
    LoadingButtonComponent,
    ShowTorrentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
