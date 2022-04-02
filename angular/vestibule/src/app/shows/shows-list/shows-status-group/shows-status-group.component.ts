import { Component, Input, OnInit } from '@angular/core';
import {ShowInList} from "../../show";

@Component({
  selector: 'vestibule-shows-status-group',
  templateUrl: './shows-status-group.component.html',
  styleUrls: ['./shows-status-group.component.scss']
})
export class ShowsStatusGroupComponent implements OnInit {

  @Input() title: string
  @Input() showList: ShowInList[]

  constructor() { }

  ngOnInit(): void {
  }

}
