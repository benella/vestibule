import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { ShowsService } from "../../shows/shows.service";
import { EnrichedShowInfo, ShowSearchResult, ShowSearchResults } from "../../shows/show";
import { BehaviorSubject, interval, Observable, of, Subject } from "rxjs";
import { debounce, switchMap } from "rxjs/operators";
import { Router } from "@angular/router";
import { ShowTorrentDetails, TorrentDownloadStatus } from "../../torrents/torrent";
import { PanelBackgroundService } from "../../panel/panel-background/panel-background.service";

@Component({
  selector: 'vestibule-find-results',
  templateUrl: './find-results.component.html',
  styleUrls: ['./find-results.component.scss']
})
export class FindResultsComponent implements OnInit {
  searchResults: ShowSearchResult[] = []
  searchOutput: Observable<ShowSearchResults>
  term: string = ''
  searchTerm = new Subject<string>()
  searchTerm$ = this.searchTerm.asObservable()
  loading = false
  searchMode = true
  previewShow?: ShowSearchResult
  previewShowEnriched?: EnrichedShowInfo
  previewShowTorrents?: ShowTorrentDetails[]
  addLoading = false
  addError = false
  addAction?: string
  resultsMessage = new BehaviorSubject<string>('');

  findForm = this.fb.group({
    term: ['', []]
  })

  constructor(private router: Router,
              private fb: FormBuilder,
              private showsService: ShowsService,
              private panelBackgroundService: PanelBackgroundService) { }

  ngOnInit(): void {
    this.searchOutput = this.searchTerm$.pipe(
      debounce(() => interval(600)),
      switchMap((searchTerm: string) => {
        if (searchTerm.length === 0) {
          return of({ shows: { subscribed: [], unsubscribed: [] } })
        }
        this.loading = true
        return this.showsService.searchShowByTitle(searchTerm);
      }),
    )
    this.searchOutput.subscribe((data) => {
      this.searchResults = data.shows.subscribed.concat(data.shows.unsubscribed)
      if (this.searchResults.length === 1) {
        this.previewShow = this.searchResults[0];
        this.panelBackgroundService.changeBackground(this.previewShow.large_poster_path)
      } else {
        this.previewShow = undefined;
        this.panelBackgroundService.defaultBackground()
      }
      this.loading = false
      if (this.searchResults.length === 0) {
        this.resultsMessage.next('Nothing found, try a different search')
      } else {
        this.resultsMessage.next('')
      }
    });

    if (history.state.data?.term) {
      this.findForm.controls['term'].setValue(history.state.data.term)
      this.onSearchChange(history.state.data.term)
    } else {
      this.resultsMessage.next('Type to start a new search')
    }
  }

  onSearchChange(searchTerm: string): void {
    this.searchTerm.next(searchTerm)
    if (searchTerm) {
      this.resultsMessage.next('')
    }
  }

  setPreviewShow(show: ShowSearchResult): void {
    if (this.previewShow?.imdb_id === show.imdb_id) {
      this.panelBackgroundService.defaultBackground()
      this.previewShow = undefined
      return
    }

    this.previewShow = show
    this.previewShowEnriched = undefined
    this.previewShowTorrents = undefined
    this.panelBackgroundService.changeBackground(this.previewShow.large_poster_path)

    this.showsService.enrichShowInfo(show.imdb_id).subscribe(
      data => this.previewShowEnriched = data
    )
  }

  getPosterStyle(show: ShowSearchResult): object {
    const url = show.large_poster_path === 'http://image.tmdb.org/t/p/w500None' ? '/static/images/default_poster.svg' : show.large_poster_path;
    return {
      backgroundImage: `url('${url}')`
    }
  }

  findPreviewShowTorrents(): void {
    this.showsService.findPreviewShowTorrents(this.previewShow.imdb_id).subscribe(
      data => this.previewShowTorrents = data.results.map(torrent => {
        return {
          showTitle: this.previewShow.title,
          seasonNumber: torrent.season,
          episodeNumber: torrent.episode,
          publicationTime: `${torrent.publication_time}`,
          feed: torrent.feed,
          quality: torrent.video_quality,
          sourceType: torrent.source,
          torrentTitle: torrent.raw_title,
          torrentLink: torrent.link,
          isStandaloneTorrent: true,
          downloadStatus: TorrentDownloadStatus.NEVER_STARTED,
          percentDone: 0
        }
      })
    )
  }

  subscribeToShow(show: ShowSearchResult) {
    if (show.subscribed) {
      return
    }

    this.addLoading = true
    this.addAction = 'Subscribing to show...'
    this.showsService.subscribeToShow(show.imdb_id).subscribe(
      data => {
        this.addAction = 'Updating show info...'
        this.showsService.updateShowInfo(data.imdb_id).subscribe(
          data => {
            this.addAction = 'Searching for torrents...'
            this.showsService.findShowTorrents(data.imdb_id).subscribe(
              data => {
                this.addLoading = false
                this.router.navigate(['/shows', data.imdb_id])
              },
              () => {
                this.addLoading = false
                this.router.navigate(['/shows', data.imdb_id])
              }
            )
          },
          () => {
            this.addAction = `Failed to subscribe to update show info`
            this.addLoading = false
            this.addError = true
          }
        )
      },
      () => {
        this.addAction = `Failed to subscribe to '${show.title}'`
        this.addLoading = false
        this.addError = true
      }
    )
  }
}
