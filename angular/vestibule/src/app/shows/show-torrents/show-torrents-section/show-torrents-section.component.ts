import { Component, Input, OnChanges, OnInit} from '@angular/core';
import { Episode, Season, ShowDetails } from "../../show";
import { ShowTorrentDetails, Torrent } from "../../../torrents/torrent";

@Component({
  selector: 'vestibule-show-torrents-section',
  templateUrl: './show-torrents-section.component.html',
  styleUrls: ['./show-torrents-section.component.scss']
})
export class ShowTorrentsSectionComponent implements OnInit, OnChanges {

  @Input() title: string
  @Input() defaultOpen = false
  @Input() matchingTorrents: boolean
  @Input() torrents: Torrent[]
  @Input() show: ShowDetails
  @Input() season: Season
  @Input() episode?: Episode

  public openList: boolean

  constructor() { }

  ngOnInit(): void {
    this.openList = this.defaultOpen
  }

  ngOnChanges(): void {
    this.openList = this.defaultOpen
  }

  toggleListOpen(): void {
    this.openList = !this.openList
  }

  torrentsDetails(): ShowTorrentDetails[] {
    return this.torrents.map((torrent) => {
      return {
        torrentId: torrent.id,
        torrentTitle: torrent.title,
        showTitle: this.show.title,
        seasonNumber: `${this.season.number}`,
        episodeNumber: this.episode ? `${this.episode.number}` : '',
        publicationTime: torrent.publication_time,
        feed: torrent.feed,
        quality: torrent.quality,
        sourceType: torrent.source_type,
        torrentLink: torrent.link,
        isStandaloneTorrent: false,
        downloadStatus: torrent.download_status
      }
    })
  }
}
