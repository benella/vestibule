import { Component, OnInit } from '@angular/core';
import { Movie } from "../interfaces/movie";
import {ActivatedRoute} from "@angular/router";
import {MoviesService} from "../movies.service";
import {switchMap, take} from "rxjs/operators";
import {PanelBackgroundService} from "../../panel/panel-background/panel-background.service";

@Component({
  selector: 'vestibule-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie
  primaryColor: string;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService, private panelBackgroundService: PanelBackgroundService) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1), switchMap(params => {
      const tmdbId = params['tmdb_id']
      return this.moviesService.movieDetails(tmdbId)
    })).subscribe(movie => {
      this.movie = movie
      this.panelBackgroundService.changeBackground(movie.poster_link)
      this.primaryColor = `rgb(${movie.palette_list.primary.join(',')})`
    })
  }

}
