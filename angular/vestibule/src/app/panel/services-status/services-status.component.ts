import {Component, OnDestroy, OnInit} from '@angular/core';
import {ServiceStatus} from "./service-status";
import {interval, Subscription} from "rxjs";
import {ServicesStatusService} from "./services-status.service";

@Component({
  selector: 'vestibule-services-status',
  templateUrl: './services-status.component.html',
  styleUrls: ['./services-status.component.scss']
})
export class ServicesStatusComponent implements OnInit, OnDestroy{

  plexStatus: ServiceStatus;
  transmissionStatus: ServiceStatus;
  private statusUpdater: Subscription

  constructor(private servicesStatusService: ServicesStatusService) { }

  ngOnInit(): void {
    this.updateServicesStatus();
    this.statusUpdater = interval(10000).subscribe(
      () => this.updateServicesStatus())
  }

  updateServicesStatus(): void {
    this.servicesStatusService.getServicesStatus().subscribe(
      data => {
        this.plexStatus = data.services["plex"];
        this.transmissionStatus = data.services["transmission"];
      }
    );
  }

  ngOnDestroy(): void {
    this.statusUpdater.unsubscribe();
  }
}
