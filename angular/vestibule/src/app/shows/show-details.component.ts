import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShowsService} from "./shows.service";
import {ShowDetails} from "./show";
import {PanelBackgroundService} from "../panel/panel-background/panel-background.service";
import {LoadingButtonStatus} from "../shared/loading-button/loading-button-status";
import {Router} from "@angular/router"
import {Subject} from "rxjs";

@Component({
  selector: 'vestibule-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit, OnDestroy {

  showUpdated: Subject<void> = new Subject<void>();
  imdb_id: any;
  show: ShowDetails;

  public updateShowInfoStatus = LoadingButtonStatus.idle
  public findShowTorrentsStatus = LoadingButtonStatus.idle
  public unsubscribeShowStatus = LoadingButtonStatus.idle

  private sub: any;

  constructor(private route: ActivatedRoute, private showsService: ShowsService,
              private panelBackgroundService: PanelBackgroundService,
              private router: Router) {}

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

  resetMessagesAndStatus() {
    this.updateShowInfoStatus = LoadingButtonStatus.idle
    this.findShowTorrentsStatus = LoadingButtonStatus.idle
    this.unsubscribeShowStatus = LoadingButtonStatus.idle
  }

  onUpdateShowInfo() {
    this.resetMessagesAndStatus()
    this.updateShowInfoStatus = LoadingButtonStatus.loading
    this.showsService.updateShowInfo(this.imdb_id).subscribe(
      data => {
        this.show = data
        this.updateShowInfoStatus = LoadingButtonStatus.idle
        this.showUpdated.next()
      },
      error => {
        this.updateShowInfoStatus = LoadingButtonStatus.error
      }
    )
  }

  onFindShowTorrents() {
    this.resetMessagesAndStatus()
    this.findShowTorrentsStatus = LoadingButtonStatus.loading
    this.showsService.findShowTorrents(this.imdb_id).subscribe(
      data => {
        this.show = data
        this.findShowTorrentsStatus = LoadingButtonStatus.idle
      },
      error => {
        this.findShowTorrentsStatus = LoadingButtonStatus.error
      }
    )
  }

  onUnsubscribe() {
    this.resetMessagesAndStatus()
    this.unsubscribeShowStatus = LoadingButtonStatus.confirm
  }

  onUnsubscribeCancel() {
    this.resetMessagesAndStatus()
  }

  onUnsubscribeConfirm() {
    this.showsService.unsubscribeFromShow(this.imdb_id).subscribe(
      data => {
        this.router.navigate(['/shows'])
      },
      error => {
        this.unsubscribeShowStatus = LoadingButtonStatus.error
      }
    )
  }

}
