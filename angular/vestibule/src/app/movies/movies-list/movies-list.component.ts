import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../movies.service";
import { MovieInList } from "../interfaces/movie";
import { PanelBackgroundService } from "../../panel/panel-background/panel-background.service";
import { MoviesRepository } from "../movies.repository";
import { FormControl } from "@angular/forms";
import { debounceTime, map, startWith, switchMap, takeUntil, tap } from "rxjs/operators";
import { combineLatest, Observable, of } from "rxjs";

@Component({
  selector: 'vestibule-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  noMovies = true
  searching = false
  subscribing = false
  filter = new FormControl()
  movies$: Observable<MovieInList[]> = combineLatest([this.repo.$movies, this.filter.valueChanges.pipe(startWith(undefined))]).pipe(map(([movies, _]) => {
    movies = movies || []

    if (!this.filter?.value) {
      return movies
    }

    return movies.filter(movie => movie.title.toLocaleLowerCase().includes((this.filter.value as string).toLocaleLowerCase()))
  })).pipe(tap(movies => {
    if (movies.length) {
      this.panelBackgroundService.changeBackground(movies[0].poster_link)
    }
  }))

  unsubscribedMovies$: Observable<MovieInList[]> = this.filter.valueChanges.pipe(debounceTime(400), switchMap(() => {
    if (this.filter?.value && this.filter.value.length > 1) {
      this.searching = true
      return this.moviesService.searchMovie(this.filter.value)
        .pipe(
          takeUntil(this.filter.valueChanges),
          tap(() => this.searching = false)
        )
    }

    return of([])
  }))

  constructor(private moviesService: MoviesService,
              private panelBackgroundService: PanelBackgroundService,
              public repo: MoviesRepository) { }

  ngOnInit(): void {
    this.moviesService.listMovies().subscribe()
  }

  primaryColor(movie: MovieInList): string {
   return `rgb(${movie.palette_list.primary.join(',')})`
  }

  movieHover(movie: MovieInList): void {
    this.panelBackgroundService.changeBackground(movie.poster_link)
  }

  addMovie(movie: MovieInList): void {
    if (this.subscribing) {
      return
    }

    this.subscribing = true
  }
}
