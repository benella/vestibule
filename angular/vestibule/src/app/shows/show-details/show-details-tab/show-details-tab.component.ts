import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'vestibule-show-details-tab',
  templateUrl: './show-details-tab.component.html',
  styleUrls: ['./show-details-tab.component.scss']
})
export class ShowDetailsTabComponent implements OnInit {
  @Input('tabTitle') title: string;
  @Input() active = false;

  constructor() { }

  ngOnInit(): void {
  }

}
