export class TorrentDownloadStatus {
  public static NEVER_STARTED = 'Never Started'
  public static DOWNLOADING = 'Downloading'
  public static READY = 'Ready'
  public static STOPPED = 'Stopped'
}

export interface ShowTorrentDetails {
  torrentId?: number
  showTitle: string
  seasonNumber: string
  episodeNumber?: string
  publicationTime: string
  feed: string
  quality: string
  sourceType: string
  torrentTitle: string
  torrentLink: string
  isStandaloneTorrent: boolean
  downloadStatus: string
  percentDone: number
}

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

export interface PreviewShowTorrent {
  raw_title: string
  link: string
  publication_time: number
  feed: string
  show_title: string
  season: string
  episode: string
  video_quality?: string
  source?: string
  other?: string
  has_subtitles: boolean
  full_season: boolean
}
