import {Component, Input, OnInit} from '@angular/core';
import {ShowInUpcomingEpisodes} from "../../shows/show";
import {PanelBackgroundService} from "../../panel/panel-background/panel-background.service";
import {ShowTorrentDetails, TorrentInList} from "../../torrents/torrent";

@Component({
  selector: 'vestibule-show-preview',
  templateUrl: './show-preview.component.html',
  styleUrls: ['./show-preview.component.scss']
})
export class ShowPreviewComponent implements OnInit {
  @Input() set previewShow(newShow: ShowInUpcomingEpisodes) {
    this.show = newShow
    if (this.show) {
      this.panelBackgroundService.changeBackground(this.show.poster_link)
      this.primaryColor = `rgb(${this.show.palette_list.primary.join(',')})`
    } else {
      this.panelBackgroundService.defaultBackground()
      this.primaryColor = undefined;
    }
  }

  primaryColor: string;
  show: ShowInUpcomingEpisodes;

  get color(): string {
    return `rgb(${this.show.palette_list.primary[0]}, ${this.show.palette_list.primary[1]}, ${this.show.palette_list.primary[2]})`
  }
  constructor(private panelBackgroundService: PanelBackgroundService) { }

  ngOnInit(): void {
  }

  torrentToShowTorrent(torrent: TorrentInList): ShowTorrentDetails {
    return {
      torrentId: torrent.id,
      showTitle: this.show.title,
      seasonNumber: torrent.season,
      episodeNumber: torrent.episode,
      publicationTime: torrent.publication_time,
      feed: torrent.feed,
      quality: torrent.quality,
      sourceType: torrent.source_type,
      torrentTitle: torrent.title,
      torrentLink: torrent.title,
      isStandaloneTorrent: false,
      downloadStatus: torrent.download_status,
      percentDone: torrent.percent_done
    }
  }
}
