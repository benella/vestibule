import {Injectable, OnDestroy, OnInit} from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {INITIAL_STATUS, ServiceStatusResponse} from "./service-status";
import {BehaviorSubject, interval, Observable, Subscription} from "rxjs";
import { take } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ServicesStatusService implements OnDestroy {
  private statusUpdater: Subscription
  private status = new BehaviorSubject<ServiceStatusResponse>(INITIAL_STATUS)

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
