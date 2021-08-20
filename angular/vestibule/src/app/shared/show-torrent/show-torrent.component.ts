import { Component, Input, OnInit} from '@angular/core';
import { TorrentsService } from "../../torrents/torrents.service";
import { ServicesStatusService } from "../../panel/services-status/services-status.service";
import { ShowTorrentDetails, TorrentDownloadStatus } from "../../torrents/torrent";

@Component({
  selector: 'vestibule-show-torrent',
  templateUrl: './show-torrent.component.html',
  styleUrls: ['./show-torrent.component.scss']
})
export class ShowTorrentComponent implements OnInit {
  @Input() set showTorrent(showTorrent: ShowTorrentDetails) {
    if (!this.torrentChanged) {
      this.torrent = showTorrent
      this.updateTorrentStatus()
    }
  }
  private torrentChanged = false
  torrent: ShowTorrentDetails
  moreDetailsMode = false
  canDownload = false
  isDone = false
  downloadSuccessful?: boolean
  downloadMessage?: string
  isDownloading = false
  statusIconName: string

  constructor(private torrentsService: TorrentsService,
              private servicesStatusService: ServicesStatusService) { }

  ngOnInit(): void {
    this.servicesStatusService.getServicesStatus().subscribe(
      data => {
        if (!data.services["transmission"].up) {
          this.downloadMessage = "Transmission client seems to be down"
          this.canDownload = false
        } else if (this.torrent.downloadStatus !== TorrentDownloadStatus.NEVER_STARTED) {
          this.downloadMessage = "Torrents is already active"
          this.canDownload = false
        } else {
          this.canDownload = true
          this.downloadMessage = undefined
        }
      }
    )
  }

  updateTorrentStatus(): void {
    switch (this.torrent.downloadStatus) {
      case TorrentDownloadStatus.STOPPED:
        this.statusIconName = 'stopped'
        this.isDone = true;
        break
      case TorrentDownloadStatus.READY:
        this.statusIconName = 'upload'
        this.isDone = true;
        break
      case TorrentDownloadStatus.DOWNLOADING:
        this.statusIconName = 'download'
        this.isDownloading = true
        break
      default:
        this.statusIconName = 'download'
    }
  }

  toggleMoreDetails(): void {
    this.moreDetailsMode = !this.moreDetailsMode
  }

  downloadTorrent(): void {
    if (!this.canDownload) {
      return
    }

    if (!this.torrent.isStandaloneTorrent) {
      this.torrentsService.downloadShowTorrent(this.torrent.torrentId).subscribe(
      data => {
        this.torrentChanged = true
        this.torrent.downloadStatus = data.torrent.download_status
        this.torrent.percentDone = data.torrent.percent_done
        this.updateTorrentStatus()
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
}
