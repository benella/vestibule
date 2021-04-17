import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TorrentDownloadResponse, Torrent } from "./torrent";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TorrentsService {

  constructor(private http: HttpClient) { }

  downloadTorrent(torrent: Torrent): Observable<TorrentDownloadResponse> {
    return this.http.get<TorrentDownloadResponse>(`api/torrents/download/${torrent.id}`)
  }
}
