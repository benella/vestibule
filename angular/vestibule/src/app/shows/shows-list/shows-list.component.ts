import { Component, OnInit } from '@angular/core';
import { ShowsService } from "../shows.service";
import { ShowInList } from "../show";

class ShowStatus {
  public static CONTINUING = 'Continuing'
  public static ENDED = 'Ended'
  public static UPCOMING = 'Upcoming'
}

@Component({
  selector: 'vestibule-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.scss']
})
export class ShowsListComponent implements OnInit {
  continuingShows: ShowInList[]
  upcomingShows: ShowInList[]
  endedShows: ShowInList[]
  showsByStatus: { [status: string] : ShowInList[] }
  noShows = true;

  constructor(private showsService: ShowsService) { }

  ngOnInit(): void {
    this.showsService.listShows().subscribe(
      data => {
        this.showsByStatus = this.groupShowsBy(data)
        this.noShows = !Object.keys(this.showsByStatus).length
        this.continuingShows = this.showsByStatus[ShowStatus.CONTINUING]
        this.upcomingShows = this.showsByStatus[ShowStatus.UPCOMING]
        this.endedShows = this.showsByStatus[ShowStatus.ENDED]
      }
    )
  }

  groupShowsBy(showList: ShowInList[], key:string = 'status') {
    return showList.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
}
