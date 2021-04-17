
export interface Torrent {
  id: number
  created: string
  modified: string
  link: string
  title: string
  feed: string
  publication_time: string
  source_type: string
  quality: string
  download_status: string
  percent_done: number
  profile_match_score: number
  profile_match: boolean
}

export interface TorrentDownloadResponse {
  torrent: Torrent
  message: string
  successful: boolean
}

export interface TorrentInList {
  season: string
  episode: string
  id: number
  created: string
  modified: string
  title: string
  feed: string
  publication_time: string
  source_type: string
  quality: string
  download_status: string
  percent_done: number
  profile_match_score: number
  profile_match: boolean
}
