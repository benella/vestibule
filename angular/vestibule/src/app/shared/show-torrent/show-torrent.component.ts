import { Component, Input } from '@angular/core';
import { ShowTorrentDetails } from "../../torrents/torrent";

@Component({
  selector: 'vestibule-show-torrent',
  templateUrl: './show-torrent.component.html',
  styleUrls: ['./show-torrent.component.scss']
})
export class ShowTorrentComponent {
  @Input() set showTorrent(showTorrent: ShowTorrentDetails) {
    this.torrent = showTorrent
  }
  torrent: ShowTorrentDetails
  moreDetailsMode = false

  constructor() { }

  toggleMoreDetails(): void {
    this.moreDetailsMode = !this.moreDetailsMode
  }
}
