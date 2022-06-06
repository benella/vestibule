import {Component, Input, Output, EventEmitter} from '@angular/core';
import { MovieTorrent } from "../../movies/interfaces/movie-torrent";
import { fadeInOutAnimation } from "../../shared/animations/fadeInOut";
import { TorrentDownloadStatus } from "../torrent";
import { TorrentsService } from "../torrents.service";

const circleLength = 62.83

@Component({
  selector: 'vestibule-movie-torrent',
  templateUrl: './movie-torrent.component.html',
  styleUrls: ['./movie-torrent.component.scss'],
  animations: [fadeInOutAnimation]
})
export class MovieTorrentComponent {
  @Input() set movieTorrent(torrent: MovieTorrent) {
    this.torrent = torrent
    this.matchIndicationOpacity = torrent.profile_match ? 1 : torrent.profile_match_score / 300
    this.downloading = torrent.download_status === TorrentDownloadStatus.DOWNLOADING
    this.uploading = torrent.download_status === TorrentDownloadStatus.READY
    this.strokeDashoffset = circleLength - torrent.percent_done / 100 * circleLength
  }

  @Input() primaryColor: string
  @Output() torrentDownloadedStarted = new EventEmitter<void>()

  torrent: MovieTorrent
  strokeDashoffset: any
  downloading = false
  loading = false
  uploading = false
  color: string
  matchIndicationOpacity: number

  constructor(private torrentsService: TorrentsService) { }

  download(): void {
    if (this.loading || this.downloading) {
      return
    }

    this.loading = true
    this.torrentsService.downloadMovieTorrent(this.torrent.id).subscribe(result => {
      this.loading = false
      this.torrentDownloadedStarted.emit()

      if (result.successful) {
        this.downloading = true
        this.movieTorrent = result.torrent
      }
    })
  }
}
