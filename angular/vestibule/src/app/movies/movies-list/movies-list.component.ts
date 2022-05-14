import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../movies.service";
import { MovieInList } from "../interfaces/movie";

@Component({
  selector: 'vestibule-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies: MovieInList[] = []

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.listMovies().subscribe(
      data => {
        this.movies = data
      }
    )
  }
}
