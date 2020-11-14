import { Component, OnInit } from '@angular/core';
import { PanelBackgroundService } from './panel-background/panel-background.service'

@Component({
  selector: 'vestibule-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  backgroundURL: string
  defaultBackgroundURL: string
  isDynamicVisible = false

  constructor(private panelBackgroundService: PanelBackgroundService) { }

  ngOnInit(): void {
    this.defaultBackgroundURL = this.panelBackgroundService.defaultBackgroundURL
    this.panelBackgroundService.currentBackground.subscribe(url => {
      if (url === ""){
        this.isDynamicVisible = false
      } else {
        this.backgroundURL = url
        this.isDynamicVisible = true
      }
    })
  }

}
