import { createState, Store } from '@ngneat/elf'
import { setEntities, selectAllEntities, withEntities } from '@ngneat/elf-entities'

import {MovieInList} from './interfaces/movie'
import {Injectable} from "@angular/core";

const {state, config} = createState(
  withEntities<MovieInList>({initialValue: []})
)

const store = new Store({name: 'movies', state, config})

@Injectable({providedIn: 'root'})
export class MoviesRepository {
  $movies = store.pipe(selectAllEntities())

  setMovies(movies: MovieInList[]): void {
    store.update(setEntities(movies.map(movie => {
      return { ...movie, id: movie.tmdb_id }
    })))
  }
}
