import { Component, OnInit } from '@angular/core';
import { ServiceStatus } from "./service-status";
import { ServicesStatusService } from "./services-status.service";

@Component({
  selector: 'vestibule-services-status',
  templateUrl: './services-status.component.html',
  styleUrls: ['./services-status.component.scss']
})
export class ServicesStatusComponent implements OnInit {

  plexStatus: ServiceStatus;
  transmissionStatus: ServiceStatus;

  constructor(private servicesStatusService: ServicesStatusService) { }

  ngOnInit(): void {
    this.updateServicesStatus();
  }

  updateServicesStatus(): void {
    this.servicesStatusService.getServicesStatus().subscribe(
      data => {
        this.plexStatus = data.services["plex"];
        this.transmissionStatus = data.services["transmission"];
      }
    );
  }
}
