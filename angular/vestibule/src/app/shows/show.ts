import { Torrent, TorrentInList, PreviewShowTorrent } from "../torrents/torrent";
import { Palette } from "../shared/interfaces/palette";

export interface EnrichedShowInfo {
  status: string
  network: string
  number_of_seasons: string
}

export interface ShowSearchResults {
  shows: {
    subscribed: ShowSearchResult[],
    unsubscribed: ShowSearchResult[]
  }
}

export interface PreviewShowTorrents {
  results: PreviewShowTorrent[]
}

export interface ShowSearchResult {
  title: string
  year: string
  small_poster_path: string
  large_poster_path: string
  imdb_id: string
  imdb_link: string
  subscribed: boolean
  network: string,
  status: string,
  number_of_seasons: number,
}

export interface ShowSuccessfulSubscription {
  imdb_id: string
}

export interface ShowInList {
  imdb_id: string
  title: string
  year: string
  status: string
  network: string
  thumbnail_link: string
  palette_list: Palette
}

export interface ShowInUpcomingEpisodes {
  imdb_id: string
  title: string
  next_episode: string
  next_episode_time_code: string
  next_episode_season_status: string
  imdb_url: string
  poster_link: string
  thumbnail_link: string
  palette_list: Palette
  recent_torrents_found: TorrentInList[]
  recent_torrents_active: TorrentInList[]
}

export interface ShowProfile {
  quality: string
  subtitles: boolean
  high_quality_source: boolean
  download_automatically: boolean
  wait: string
}

export interface ShowSettings {
  imdb_id: string
  custom_lookup_names: string
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
  palette_list: Palette
  profile: ShowProfile
  formatted_imdb_id: string
  custom_lookup_names: string
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
  is_downloaded: boolean
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

export interface UpdateTorrents {
  season?: {
    id: number,
    should_download: boolean
  }
  episode?: {
    id: number,
    should_download: boolean
  }
}

export interface DownloadEpisodeBestMatch {
  episode: {
    id: number,
  }
}
