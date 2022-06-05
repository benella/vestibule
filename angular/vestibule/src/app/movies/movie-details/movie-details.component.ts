import { Component, OnInit } from '@angular/core';
import { Movie } from "../interfaces/movie";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap, take } from "rxjs/operators";
import { PanelBackgroundService } from "../../panel/panel-background/panel-background.service";
import { MovieTorrentsRepository } from "./movie-torrents.repository";
import { combineLatest } from "rxjs";
import { MovieService } from "./movie.service";

@Component({
  selector: 'vestibule-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  providers: [MovieService, MovieTorrentsRepository]
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie
  primaryColor: string;
  loading = false

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    public repo: MovieTorrentsRepository,
    private panelBackgroundService: PanelBackgroundService) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1), switchMap(params => {
      const tmdbId = params['tmdb_id']
      return combineLatest([
        this.movieService.movieDetails(tmdbId),
        this.movieService.getMovieTorrents(tmdbId)
      ])
    })).subscribe(([movie, _]) => {
      this.movie = movie
      this.panelBackgroundService.changeBackground(movie.poster_link)
      this.primaryColor = `rgb(${movie.palette_list.primary.join(',')})`
    })
  }

  updateInfo(): void {
    if (this.loading) {
      return
    }

    this.loading = true
    this.movieService.updateMovieInfo(this.movie.tmdb_id).subscribe(movie => {
      this.loading = false
      this.movie = movie
    })
  }

  findTorrents(): void {
    if (this.loading) {
      return
    }

    this.loading = true
    this.movieService.findMovieTorrents(this.movie.tmdb_id).subscribe(() => {
      this.loading = false
    })
  }

  unsubscribe(): void {
    if (this.loading) {
      return
    }

    this.loading = true
    this.movieService.unsubscribeFromMovie(this.movie.tmdb_id).subscribe(() => {
      this.loading = false
      this.router.navigate(['/movies'])
    })
  }
}
