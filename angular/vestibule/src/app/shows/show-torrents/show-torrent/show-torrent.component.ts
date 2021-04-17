import { Component, Input, OnInit } from '@angular/core';
import { ShowDetails, Season, Episode } from "../../show";
import { TorrentsService } from "../../../torrents/torrents.service";
import { ServicesStatusService } from "../../../panel/services-status/services-status.service";
import { Torrent } from "../../../torrents/torrent";

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
  canDownload = false
  downloadSuccessful?: boolean
  downloadMessage?: string

  constructor(private torrentsService: TorrentsService,
              private servicesStatusService: ServicesStatusService) { }

  ngOnInit(): void {
    this.servicesStatusService.getServicesStatus().subscribe(
      data => {
        if (!data.services["transmission"].up) {
          this.downloadMessage = "Transmission client seems to be down"
          this.canDownload = false
        } else if (this.torrent.download_status === TorrentDownloadStatus.DOWNLOADING) {
          this.downloadMessage = "Torrents is already downloading"
          this.canDownload = false
        } else {
          this.canDownload = true
          this.downloadMessage = undefined
        }
      }
    )
  }

  toggleMoreDetails(): void {
    this.moreDetailsMode = !this.moreDetailsMode
  }

  downloadTorrents(): void {
    this.torrentsService.downloadTorrent(this.torrent).subscribe(
      data => {
        this.torrent = data.torrent
        this.downloadMessage = data.message
        this.downloadSuccessful = data.successful
      },
      error => {
        this.downloadSuccessful = false
        this.downloadMessage = error
      }
    )
  }

  showDownloadStatus(): boolean {
    return this.torrent.download_status && this.torrent.download_status != TorrentDownloadStatus.NEVER_STARTED
  }

}
