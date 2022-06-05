import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MovieInList, Movie } from "./interfaces/movie";
import { MoviesRepository } from "./movies.repository";
import { map, tap } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient, private repo: MoviesRepository) { }

  listMovies(): Observable<MovieInList[]> {
    return this.http.get<MovieInList[]>('api/movies/list').pipe(tap((movies) => {
      this.repo.setMovies(movies)
    }))
  }

  searchMovie(searchTerm: string): Observable<MovieInList[]> {
    return this.http.get<{movies: MovieInList[]}>(`api/movies/search/${searchTerm}`).pipe(map(results => results.movies))
  }

  subscribeToMovie(tmdb_id: string): Observable<{ tmdb_id: string }> {
    return this.http.post<{ tmdb_id: string }>(`api/movies/subscribe`, { tmdb_id })
  }
}
