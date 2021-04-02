import {Torrent} from "../shows/show";

export interface TorrentDownloadResponse {
  torrent: Torrent
  message: string
  successful: boolean
}
