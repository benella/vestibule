import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowsService } from "./shows.service";
import { ShowDetails } from "./show";
import {PanelBackgroundService} from "../panel/panel-background/panel-background.service";

@Component({
  selector: 'vestibule-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit, OnDestroy {
  public imdb_id: any;
  public show: ShowDetails;
  private sub: any;

  constructor(private route: ActivatedRoute, private showsService: ShowsService,
              private panelBackgroundService: PanelBackgroundService) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.imdb_id = params['imdb_id']
      this.showsService.showDetails(this.imdb_id).subscribe(
        data => {
          this.show = data
          this.panelBackgroundService.changeBackground(this.show.thumbnail_link)
        }
      )
    });
  }

  ngOnDestroy() {
    this.panelBackgroundService.defaultBackground()
    this.sub.unsubscribe();
  }

}
