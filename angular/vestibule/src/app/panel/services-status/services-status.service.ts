import {Injectable, OnDestroy, OnInit} from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { ServiceStatusResponse } from "./service-status";
import { interval, Observable, Subject, Subscription } from "rxjs";
import { take } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ServicesStatusService implements OnDestroy {
  private statusUpdater: Subscription
  private status = new Subject<ServiceStatusResponse>()

  constructor(private http: HttpClient) {
    this.updateServicesStatus();
    this.statusUpdater = interval(10000000).subscribe(
      () => this.updateServicesStatus())
  }

  private updateServicesStatus(): void {
    this.getCurrentServicesStatus().pipe(take(1)).subscribe(data => this.status.next(data));
  }

  private getCurrentServicesStatus(): Observable<ServiceStatusResponse> {
    return this.http.get<ServiceStatusResponse>('api/services-status')
  }

  public getServicesStatus(): Observable<ServiceStatusResponse> {
    return this.status.asObservable()
  }

  ngOnDestroy(): void {
    this.statusUpdater.unsubscribe();
  }
}
