import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MovieInList } from "./interfaces/movie";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  listMovies(): Observable<MovieInList[]> {
        return this.http.get<MovieInList[]>('api/movies/list')
  }
}
