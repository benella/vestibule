import { Component, Input, OnInit } from '@angular/core';
import { MovieTorrent } from "../../movies/interfaces/movie-torrent";
import { fadeInOutAnimation } from "../../shared/animations/fadeInOut";
import {TorrentDownloadStatus} from "../torrent";

@Component({
  selector: 'vestibule-movie-torrent',
  templateUrl: './movie-torrent.component.html',
  styleUrls: ['./movie-torrent.component.scss'],
  animations: [fadeInOutAnimation]
})
export class MovieTorrentComponent implements OnInit {
  @Input() set movieTorrent(torrent: MovieTorrent) {
    this.torrent = torrent
    this.matchIndicationOpacity = torrent.profile_match ? 1 : torrent.profile_match_score / 300
    this.downloading = torrent.download_status === TorrentDownloadStatus.DOWNLOADING
    this.uploading = torrent.download_status === TorrentDownloadStatus.READY
    this.strokeDashoffset = 62.83 - torrent.percent_done / 100 * 62.83
  }

  @Input() primaryColor: string

  torrent: MovieTorrent
  strokeDashoffset: any
  downloading: boolean
  uploading: boolean
  color: string
  matchIndicationOpacity: number

  constructor() { }

  ngOnInit(): void {
  }

}
