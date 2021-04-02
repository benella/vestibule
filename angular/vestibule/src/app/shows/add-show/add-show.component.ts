import { Component, OnInit } from '@angular/core';
import { ShowsService } from "../shows.service";
import { switchMap } from "rxjs/operators";
import { ShowSearchResult, ShowSearchResults } from "../show";
import { Observable, Subject } from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'vestibule-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.scss']
})
export class AddShowComponent implements OnInit {
  searchResults: ShowSearchResult[]
  searchOutput: Observable<ShowSearchResults>
  searchTerm = new Subject<string>()
  searchTerm$ = this.searchTerm.asObservable()
  previewAddMode = false
  addLoading = false
  addError = false
  addAction?: string
  previewShow?: ShowSearchResult

  constructor(private router: Router, private showsService: ShowsService) {
    this.searchOutput = this.searchTerm$.pipe(
      switchMap((searchTerm: string) => {
        return this.showsService.searchShowByTitle(searchTerm);
      }),
    );
    this.searchOutput.subscribe((data) => this.searchResults = data.results);
  }

  ngOnInit(): void {
  }

  onSearchChange(searchTerm: string) {
    this.exitPreviewMode()

    if (searchTerm.length < 3) {
      this.searchResults = []
    } else {
      this.searchTerm.next(searchTerm)
    }
  }

  exitPreviewMode() {
    this.previewAddMode = false
    this.addError = false
  }

  previewAddShow(show: ShowSearchResult) {
    this.previewAddMode = true
    this.previewShow = show
  }

  addShow(show: ShowSearchResult) {
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
