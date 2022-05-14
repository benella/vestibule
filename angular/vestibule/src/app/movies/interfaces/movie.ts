import { Palette } from "../../shared/interfaces/palette";

export interface MovieInList {
  imdb_id: string
  title: string
  year: string
  release_date: string
  status: string
  poster_link: string
  palette_list: Palette
}
