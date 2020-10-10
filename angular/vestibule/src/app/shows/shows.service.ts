import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ShowInList} from "./show";

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(private http: HttpClient) { }

  listShows(): Observable<ShowInList[]> {
    return this.http.get<ShowInList[]>('api/shows/list')
  }
}
