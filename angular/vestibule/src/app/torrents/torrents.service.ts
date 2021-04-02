import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Torrent } from "../shows/show";
import { TorrentDownloadResponse } from "./torrent";
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
