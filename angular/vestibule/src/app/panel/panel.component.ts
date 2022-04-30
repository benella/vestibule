import { Component, OnInit } from '@angular/core';
import { PanelBackgroundService } from './panel-background/panel-background.service'
import {NavigationEnd, Router, Event} from "@angular/router";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'vestibule-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  backgroundURL: string
  defaultBackgroundURL: string
  isDynamicVisible = false
  mobileMenuShown = false

  findForm = this.fb.group({
    term: ['', []]
  })

  constructor(private fb: FormBuilder, private panelBackgroundService: PanelBackgroundService, private router: Router) { }

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

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.mobileMenuShown = false
      }
    })
  }

  onFindSubmit() {
    const control = this.findForm.controls['term']
    this.router.navigate(['/find/results'], {state: {data: {term: control.value }}})
    control.setValue('')
  }

}
