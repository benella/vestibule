import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Episode, Season, ShowDetails } from "../../show";
import {Torrent} from "../../../torrents/torrent";

@Component({
  selector: 'vestibule-show-torrents-section',
  templateUrl: './show-torrents-section.component.html',
  styleUrls: ['./show-torrents-section.component.scss']
})
export class ShowTorrentsSectionComponent implements OnInit, OnChanges {

  @Input() title: string
  @Input() defaultOpen = false
  @Input() matchingTorrents: boolean
  @Input() torrents: Torrent[]
  @Input() show: ShowDetails
  @Input() season: Season
  @Input() episode?: Episode

  public openList: boolean

  constructor() { }

  ngOnInit(): void {
    this.openList = this.defaultOpen
  }

  ngOnChanges(): void {
    this.openList = this.defaultOpen
  }

  toggleListOpen(): void {
    this.openList = !this.openList
  }
}
