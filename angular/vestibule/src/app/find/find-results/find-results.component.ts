import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { ShowsService } from "../../shows/shows.service";
import { EnrichedShowInfo, ShowSearchResult, ShowSearchResults } from "../../shows/show";
import { Observable, Subject } from "rxjs";
import { switchMap } from "rxjs/operators";
import { Router } from "@angular/router";

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
  addLoading = false
  addError = false
  addAction?: string

  findForm = this.fb.group({
    term: ['', []]
  })

  constructor(private router: Router, private fb: FormBuilder, private showsService: ShowsService) { }

  ngOnInit(): void {
    this.searchOutput = this.searchTerm$.pipe(
      switchMap((searchTerm: string) => {
        return this.showsService.searchShowByTitle(searchTerm);
      }),
    )
    this.searchOutput.subscribe((data) => {
      this.searchResults = data.results
      this.loading = false
    });

    if (history.state.data?.term) {
      this.findForm.controls['term'].setValue(history.state.data.term)
      this.onSearchChange(history.state.data.term)
    }
  }

  onSearchChange(searchTerm: string): void {
    if (searchTerm.length < 1) {
      this.searchResults = []
    } else {
      this.loading = true
      this.searchTerm.next(searchTerm)
    }
  }

  setPreviewShow(show: ShowSearchResult): void {
    this.searchMode = false

    if (this.previewShow?.imdb_id === show.imdb_id) {
      return
    }

    this.previewShow = show
    this.previewShowEnriched = undefined

    this.showsService.enrichShowInfo(show.imdb_id).subscribe(
      data => this.previewShowEnriched = data
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
