import { Component, OnInit } from '@angular/core';
import { ShowsService } from "./shows.service";
import { ShowInList } from "./show";

@Component({
  selector: 'vestibule-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.scss']
})
export class ShowsListComponent implements OnInit {
  shows: ShowInList[]
  showsByStatus: { [status: string] : ShowInList[] }
  constructor(private showsService: ShowsService) { }

  ngOnInit(): void {
    this.showsService.listShows().subscribe(
      data => {
        this.shows = data
      }
    )
  }

}
