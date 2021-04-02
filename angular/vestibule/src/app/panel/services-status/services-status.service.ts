import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { ServiceStatusResponse } from "./service-status";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServicesStatusService {

  constructor(private http: HttpClient) { }

  getServicesStatus(): Observable<ServiceStatusResponse> {
    return this.http.get<ServiceStatusResponse>('api/services-status')
  }
}
