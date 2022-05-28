import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../movies.service";
import { MovieInList } from "../interfaces/movie";

class MovieStatus {
  public static RUMORED = 'Rumored'
  public static PLANNED = 'Planned'
  public static IN_PRODUCTION = 'In Production'
  public static POST_PRODUCTION = 'Post Production'
  public static RELEASED = 'Released'
  public static CANCELED = 'Canceled'
}

@Component({
  selector: 'vestibule-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  rumoredMovies: MovieInList[] = []
  plannedMovies: MovieInList[] = []
  inProductionMovies: MovieInList[] = []
  postProductionMovies: MovieInList[] = []
  releasedMovies: MovieInList[] = []
  canceledMovies: MovieInList[] = []

  moviesByStatus: { [status: string]: MovieInList[] }
  noMovies = true;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.listMovies().subscribe(
      data => {
        this.moviesByStatus = this.groupMoviesBy(data)
        this.noMovies = !Object.keys(this.moviesByStatus).length
        this.rumoredMovies = this.moviesByStatus[MovieStatus.RUMORED]
        this.plannedMovies = this.moviesByStatus[MovieStatus.PLANNED]
        this.inProductionMovies = this.moviesByStatus[MovieStatus.IN_PRODUCTION]
        this.postProductionMovies = this.moviesByStatus[MovieStatus.POST_PRODUCTION]
        this.releasedMovies = this.moviesByStatus[MovieStatus.RELEASED]
        this.canceledMovies = this.moviesByStatus[MovieStatus.CANCELED]
      }
    )
  }

  groupMoviesBy(movieList: MovieInList[], key:string = 'status') {
    return movieList.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
}
