import { Injectable } from '@angular/core';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private cookieService: CookieService) { }

  public getCSRFToken(): string {
    return this.cookieService.get('csrftoken')
  }
}
