import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from "../interfaces/movie";
import { MovieTorrentsRepository } from "./movie-torrents.repository";
import { map, tap } from "rxjs/operators";
import { MovieTorrent } from "../interfaces/movie-torrent";

@Injectable()
export class MovieService {

  constructor(private http: HttpClient, private repo: MovieTorrentsRepository) { }

  movieDetails(tmdb_id: string): Observable<Movie> {
    return this.http.get<Movie>(`api/movies/${tmdb_id}`)
  }

  unsubscribeFromMovie(tmdb_id: string): Observable<any> {
    return this.http.delete<any>(`api/movies/${tmdb_id}`)
  }

  updateMovieInfo(tmdb_id: string): Observable<Movie> {
    return this.http.get<Movie>(`api/movies/update_info/${tmdb_id}`)
  }

  getMovieTorrents(tmdb_id: string): Observable<MovieTorrent[]> {
    return this.http.get<{torrents:MovieTorrent[]}>(`api/movies/torrents/${tmdb_id}`)
      .pipe(map(torrents => torrents.torrents), tap(torrents => this.repo.setTorrents(torrents)))
  }

  findMovieTorrents(tmdb_id: string): Observable<any> {
    return this.http.get<{torrents:MovieTorrent[]}>(`api/movies/find_torrents/${tmdb_id}`)
      .pipe(map(torrents => torrents.torrents), tap(torrents => this.repo.setTorrents(torrents)))
  }
}
