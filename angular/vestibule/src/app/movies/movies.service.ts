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

  movieDetails(tmdb_id: string): Observable<Movie> {
    return this.http.get<Movie>(`api/movies/${tmdb_id}`)
  }

  searchMovie(searchTerm: string): Observable<MovieInList[]> {
    return this.http.get<{movies: MovieInList[]}>(`api/movies/search/${searchTerm}`).pipe(map(results => results.movies))
  }

  subscribeToMovie(tmdb_id: string): Observable<{ tmdb_id: string }> {
    return this.http.post<{ tmdb_id: string }>(`api/movies/subscribe`, { tmdb_id })
  }

  unsubscribeFromMovie(tmdb_id: string): Observable<any> {
    return this.http.delete<any>(`api/movies/${tmdb_id}`)
  }
}
