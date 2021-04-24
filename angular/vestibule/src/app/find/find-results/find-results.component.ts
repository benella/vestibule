import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { ShowsService } from "../../shows/shows.service";
import { ShowSearchResult, ShowSearchResults } from "../../shows/show";
import { Observable, Subject } from "rxjs";
import { switchMap } from "rxjs/operators";

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

  findForm = this.fb.group({
    term: ['', []]
  })

  constructor(private fb: FormBuilder, private showsService: ShowsService) { }

  ngOnInit(): void {
    this.searchOutput = this.searchTerm$.pipe(
      switchMap((searchTerm: string) => {
        return this.showsService.searchShowByTitle(searchTerm);
      }),
    );
    this.searchOutput.subscribe((data) => this.searchResults = data.results);

    if (history.state.data?.term) {
      this.findForm.controls['term'].setValue(history.state.data.term)
      this.onSearchChange(history.state.data.term)
    }
  }

    onSearchChange(searchTerm: string): void {
    if (searchTerm.length < 1) {
      this.searchResults = []
    } else {
      this.searchTerm.next(searchTerm)
    }
  }

}
