import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MovieTorrentDownloadResponse, TorrentDownloadResponse } from "./torrent";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TorrentsService {

  constructor(private http: HttpClient) { }

  downloadTorrent(torrentID: number): Observable<TorrentDownloadResponse> {
    return this.http.get<TorrentDownloadResponse>(`api/torrents/download/${torrentID}`)
  }

  downloadMovieTorrent(torrentID: number): Observable<MovieTorrentDownloadResponse> {
    return this.http.get<MovieTorrentDownloadResponse>(`api/torrents/download-movie/${torrentID}`)
  }
}
