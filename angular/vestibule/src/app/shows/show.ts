
export interface ShowInList {
  imdb_id: string
  title: string
  year: string
  network: string
  thumbnail_link: string
  palette_list: number[][]
}

export interface ShowProfile {
  id: number
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
  number_of_seasons: string
  runtime: string
  network: string
  status: string
  next_episode: string
  next_episode_time_code: string
  poster_link: string
  thumbnail_link: string
  palette_list: number[][]
  profile: ShowProfile
  formatted_imdb_id: string
}
