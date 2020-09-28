import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ServiceStatus} from "./service-status";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServicesStatusService {

  constructor(private http: HttpClient) { }

  getServicesStatus(): Observable<ServiceStatus[]> {
    return this.http.get<ServiceStatus[]>('api/services-status')
  }
}
