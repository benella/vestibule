import {AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';
import {ShowDetailsTabComponent} from "../show-details-tab/show-details-tab.component";

@Component({
  selector: 'vestibule-show-details-tabs',
  templateUrl: './show-details-tabs.component.html',
  styleUrls: ['./show-details-tabs.component.scss']
})
export class ShowDetailsTabsComponent implements AfterContentInit {

  @ContentChildren(ShowDetailsTabComponent) tabs: QueryList<ShowDetailsTabComponent>;

  constructor() { }

  ngAfterContentInit(): void {
    let activeTabs = this.tabs.filter((tab)=>tab.active);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: ShowDetailsTabComponent){
    this.tabs.toArray().forEach(tab => tab.active = false);
    tab.active = true;
  }

}
