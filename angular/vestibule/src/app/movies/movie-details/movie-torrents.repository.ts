import { createState, Store } from '@ngneat/elf'
import {
  setEntities,
  withEntities,
  selectAllEntitiesApply
} from '@ngneat/elf-entities'

import { MovieTorrent } from "../interfaces/movie-torrent";
import { Injectable } from "@angular/core";
import {TorrentDownloadStatus} from "../../torrents/torrent";

const {state, config} = createState(
  withEntities<MovieTorrent>({initialValue: []})
)

const store = new Store({name: 'movie-torrents', state, config})

@Injectable()
export class MovieTorrentsRepository {
  matchingTorrents$ = store.pipe(selectAllEntitiesApply({
    mapEntity: (t: MovieTorrent) => t,
    filterEntity: (t: MovieTorrent) => t.download_status === TorrentDownloadStatus.NEVER_STARTED && t.profile_match
  }))

  notMatchingTorrents$ = store.pipe(selectAllEntitiesApply({
    mapEntity: (t: MovieTorrent) => t,
    filterEntity: (t: MovieTorrent) => t.download_status === TorrentDownloadStatus.NEVER_STARTED && !t.profile_match
  }))

  activeTorrents$ = store.pipe(selectAllEntitiesApply({
    mapEntity: (t: MovieTorrent) => t,
    filterEntity: (t: MovieTorrent) => t.download_status !== TorrentDownloadStatus.NEVER_STARTED
  }))

  setTorrents(torrents: MovieTorrent[]): void {
    store.update(setEntities(torrents))
  }
}
