import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        'X-CSRFToken': this.authService.getCSRFToken()
      }
    });

    return next.handle(request);
  }
}
