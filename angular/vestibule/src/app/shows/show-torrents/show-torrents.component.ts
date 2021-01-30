import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { ShowsService } from "../shows.service";
import {Season, Episode, ShowTorrents, ShowDetails} from "../show";
import {Observable, Subscription} from "rxjs";

class EpisodeStatusColors {
  public static SKIP = '#c78415'
  public static SHOULD_DOWNLOAD = '#0071bc'
  public static DOWNLOADED = '#50ad6f'
  public static NOT_AIRED = '#8241d8'
}

@Component({
  selector: 'vestibule-show-torrents',
  templateUrl: './show-torrents.component.html',
  styleUrls: ['./show-torrents.component.scss']
})
export class ShowTorrentsComponent implements OnInit, OnDestroy {
  @Input() show: ShowDetails
  @Input() showUpdated$: Observable<void>

  private showUpdatedSubscription: Subscription

  seasons: ShowTorrents
  selectedSeason: Season
  selectedEpisode: Episode

  constructor(private showsService: ShowsService) { }

  ngOnInit(): void {
    this.updateShowTorrents()
    this.showUpdatedSubscription = this.showUpdated$.subscribe(() => this.updateShowTorrents())
  }

  updateShowTorrents(): void {
    this.showsService.listShowTorrents(this.show.imdb_id)
      .subscribe(data => {
        this.seasons = data

        if (this.seasons.seasons.length) {
          this.selectedSeason = this.seasons.seasons[0]

          if (this.selectedSeason.episodes.length) {
            this.selectedEpisode = this.selectedSeason.episodes[0]
          }
        }
      })
  }

  episodeStatusBulletColor(episode: Episode): string {
    if (episode.is_downloaded) {
      return EpisodeStatusColors.DOWNLOADED
    }

    if (!episode.should_download) {
      return EpisodeStatusColors.SKIP
    }

    return episode.is_aired ? EpisodeStatusColors.SHOULD_DOWNLOAD : EpisodeStatusColors.NOT_AIRED
  }

  episodeStatusText(episode: Episode): string {
    if (episode.is_downloaded) {
      return 'Downloaded'
    }

    if (!episode.should_download) {
      return 'Skip'
    }

    return episode.is_aired ? 'Should Download' : 'Not Aired Yet'
  }

  chooseEpisode(season: Season, episode: Episode): void {
    this.selectedSeason = season
    this.selectedEpisode = episode
  }

  showNoTorrentsMessage(): boolean {
    return !this.selectedSeason.season_matching_torrents.length &&
      !this.selectedSeason.season_unmatching_torrents.length &&
      !this.selectedEpisode.matching_torrents.length &&
      !this.selectedEpisode.unmatching_torrents.length
  }

  ngOnDestroy() {
    this.showUpdatedSubscription.unsubscribe()
  }
}
