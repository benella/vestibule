
export interface ShowInList {
  imdb_id: string
  title: string
  year: string
  status: string
  network: string
  thumbnail_link: string
  palette_list: number[][]
}

export interface ShowProfile {
  quality: string
  subtitles: boolean
  high_quality_source: boolean
  download_automatically: boolean
  wait: string
}

export interface ShowDetails {
  imdb_id: string
  title: string
  year: string
  number_of_seasons_as_int: number
  runtime: string
  network: string
  status_line: string
  next_episode: string
  next_episode_time_code: string
  imdb_rating: string
  imdb_url: string
  poster_link: string
  thumbnail_link: string
  palette_list: number[][]
  profile: ShowProfile
  formatted_imdb_id: string
}

export interface ShowTorrents {
  seasons: Season[]
  downloading_torrents: Torrent[]
}

export interface Season {
  id: number
  number: number
  title: string
  should_download: boolean
  downloaded: boolean
  episodes: Episode[]
  season_matching_torrents: Torrent[]
  season_unmatching_torrents: Torrent[]
}

export interface Episode {
  id: number
  number: number
  title: string
  should_download: boolean
  is_downloaded: boolean
  is_aired: boolean
  air_time_code: string
  air_status: string
  matching_torrents: Torrent[]
  unmatching_torrents: Torrent[]
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
