import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../movies.service";
import { MovieInList } from "../interfaces/movie";
import { PanelBackgroundService } from "../../panel/panel-background/panel-background.service";

@Component({
  selector: 'vestibule-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies: MovieInList[] = []
  noMovies = true;

  constructor(private moviesService: MoviesService,
              private panelBackgroundService: PanelBackgroundService) { }

  ngOnInit(): void {
    this.moviesService.listMovies().subscribe(
      data => {
        this.movies = data
      }
    )
  }

  primaryColor(movie: MovieInList): string {
   return `rgb(${movie.palette_list.primary.join(',')})`
  }

  movieHover(movie: MovieInList): void {
    this.panelBackgroundService.changeBackground(movie.poster_link)
  }
}
