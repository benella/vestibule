import { Component, OnInit } from '@angular/core';
import { ShowsService } from "../shows/shows.service";
import { ShowInUpcomingEpisodes } from "../shows/show";

@Component({
  selector: 'vestibule-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  upcomingEpisodesShows: ShowInUpcomingEpisodes[]
  showInPreview: ShowInUpcomingEpisodes

  constructor(private showsService: ShowsService) { }

  ngOnInit(): void {
    this.showsService.listShowsByUpcomingEpisodes().subscribe(
      data => {
        this.upcomingEpisodesShows = data
        this.showInPreview = this.upcomingEpisodesShows[0]
      }
    )
  }
}
