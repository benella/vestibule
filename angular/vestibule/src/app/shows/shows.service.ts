import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ShowInList, ShowDetails, ShowProfile, ShowTorrents } from "./show";

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(private http: HttpClient) { }

  listShows(): Observable<ShowInList[]> {
    return this.http.get<ShowInList[]>('api/shows/list')
  }

  showDetails(imdb_id: string): Observable<ShowDetails> {
    return this.http.get<ShowDetails>(`api/shows/${imdb_id}`)
  }

  listShowTorrents(imdb_id: string): Observable<ShowTorrents> {
    return this.http.get<ShowTorrents>(`api/shows/torrents/${imdb_id}`)
  }

  updateShowProfile(imdb_id: string, profile: ShowProfile): Observable<ShowProfile> {
    return this.http.put<ShowProfile>(`api/shows/update_profile/${imdb_id}`, profile)
  }

  updateShowInfo(imdb_id: string): Observable<ShowDetails> {
    return this.http.get<ShowDetails>(`api/shows/update_info/${imdb_id}`)
  }

  findShowTorrents(imdb_id: string): Observable<ShowDetails> {
    return this.http.get<ShowDetails>(`api/shows/find_torrents/${imdb_id}`)
  }

  unsubscribeFromShow(imdb_id: string): Observable<any> {
    return this.http.delete<any>(`api/shows/${imdb_id}`)
  }
}
