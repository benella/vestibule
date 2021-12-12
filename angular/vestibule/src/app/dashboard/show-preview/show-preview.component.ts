import {Component, Input, OnInit} from '@angular/core';
import {ShowInUpcomingEpisodes} from "../../shows/show";
import {PanelBackgroundService} from "../../panel/panel-background/panel-background.service";

@Component({
  selector: 'vestibule-show-preview',
  templateUrl: './show-preview.component.html',
  styleUrls: ['./show-preview.component.scss']
})
export class ShowPreviewComponent implements OnInit {
  @Input() set previewShow(newShow: ShowInUpcomingEpisodes) {
    this.show = newShow
    if (this.show) {
      this.panelBackgroundService.changeBackground(this.show.poster_link)
    } else {
      this.panelBackgroundService.defaultBackground()
    }
  }

  show: ShowInUpcomingEpisodes;

  get color(): string {
    return `rgb(${this.show.palette_list.primary[0]}, ${this.show.palette_list.primary[1]}, ${this.show.palette_list.primary[2]})`
  }
  constructor(private panelBackgroundService: PanelBackgroundService) { }

  ngOnInit(): void {
  }

}
