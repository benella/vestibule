import { Palette } from "../../shared/interfaces/palette";

export interface MovieInList {
  id: string
  imdb_id: string
  tmdb_id: string
  title: string
  year: string
  release_date_text: string
  status?: string
  poster_link: string
  palette_list: Palette
}

export interface Movie {
  imdb_id: string
  tmdb_id: string
  title: string
  status: string
  release_date_text: string
  poster_link: string
  palette_list: Palette
  runtime_text: string
  crew?: {
    directors?: string[]
    production?: string[]
  }
}
