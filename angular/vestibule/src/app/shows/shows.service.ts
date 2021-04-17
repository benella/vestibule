import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {
  ShowInList,
  ShowDetails,
  ShowProfile,
  ShowTorrents,
  ShowSearchResults,
  ShowSuccessfulSubscription,
  ShowInUpcomingEpisodes,
} from "./show";

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(private http: HttpClient) { }

  listShows(): Observable<ShowInList[]> {
    return this.http.get<ShowInList[]>('api/shows/list')
  }

  listShowsByUpcomingEpisodes(): Observable<ShowInUpcomingEpisodes[]> {
    return this.http.get<ShowInUpcomingEpisodes[]>('api/shows/upcoming_episodes')
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

  subscribeToShow(imdb_id: string): Observable<ShowSuccessfulSubscription> {
    return this.http.post<ShowSuccessfulSubscription>(`api/shows/subscribe`, {imdb_id: imdb_id})
  }

  searchShowByTitle(searchTerm: string): Observable<ShowSearchResults> {
    return this.http.get<ShowSearchResults>(`api/shows/search/${searchTerm}`)
  }
}
