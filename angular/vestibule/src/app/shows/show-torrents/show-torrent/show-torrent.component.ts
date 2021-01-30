import { Component, Input, OnInit } from '@angular/core';
import {ShowDetails, Torrent, Season, Episode} from "../../show";

class TorrentDownloadStatus {
  public static NEVER_STARTED = 'Never Started'
  public static DOWNLOADING = 'Downloading'
  public static READY = 'Ready'
  public static STOPPED = 'Stopped'
}

@Component({
  selector: 'vestibule-show-torrent',
  templateUrl: './show-torrent.component.html',
  styleUrls: ['./show-torrent.component.scss']
})
export class ShowTorrentComponent implements OnInit {
  @Input() torrent: Torrent
  @Input() show: ShowDetails
  @Input() season: Season
  @Input() episode?: Episode

  moreDetailsMode = false

  constructor() { }

  ngOnInit(): void {
  }

  toggleMoreDetails(): void {
    this.moreDetailsMode = !this.moreDetailsMode
  }

  showDownloadStatus(): boolean {
    return this.torrent.download_status && this.torrent.download_status != TorrentDownloadStatus.NEVER_STARTED
  }

}
