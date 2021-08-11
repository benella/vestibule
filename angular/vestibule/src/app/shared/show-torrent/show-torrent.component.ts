import { Component, Input, OnInit } from '@angular/core';
import { TorrentsService } from "../../torrents/torrents.service";
import { ServicesStatusService } from "../../panel/services-status/services-status.service";
import { ShowTorrentDetails, TorrentDownloadStatus } from "../../torrents/torrent";
import {take} from "rxjs/operators";

@Component({
  selector: 'vestibule-show-torrent',
  templateUrl: './show-torrent.component.html',
  styleUrls: ['./show-torrent.component.scss']
})
export class ShowTorrentComponent implements OnInit {
  @Input() torrent: ShowTorrentDetails

  moreDetailsMode = false
  canDownload = false
  downloadSuccessful?: boolean
  downloadMessage?: string

  constructor(private torrentsService: TorrentsService,
              private servicesStatusService: ServicesStatusService) { }

  ngOnInit(): void {
    this.servicesStatusService.getServicesStatus().pipe(take(1)).subscribe(
      data => {
        if (!data.services["transmission"].up) {
          this.downloadMessage = "Transmission client seems to be down"
          this.canDownload = false
        } else if (this.torrent.downloadStatus === TorrentDownloadStatus.DOWNLOADING) {
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
    if (!this.torrent.isStandaloneTorrent) {
      this.torrentsService.downloadShowTorrent(this.torrent.torrentId).subscribe(
      data => {
        this.torrent.downloadStatus = data.torrent.download_status
        this.downloadMessage = data.message
        this.downloadSuccessful = data.successful
      },
      error => {
        this.downloadSuccessful = false
        this.downloadMessage = error
      }
    )
    }
  }

  showDownloadStatus(): boolean {
    return this.torrent.downloadStatus && this.torrent.downloadStatus != TorrentDownloadStatus.NEVER_STARTED
  }
}
