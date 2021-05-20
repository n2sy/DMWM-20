import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let mytoken = localStorage.getItem('mytoken');
    if (mytoken) {
      let header = new HttpHeaders({
        Authorization: 'bearer ' + mytoken,
      });

      let cloneRequest = request.clone({
        headers: header,
      });

      return next.handle(cloneRequest);
    }
    return next.handle(request);
  }
}

export const LoggedInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: LoginInterceptor,
  multi: true,
};
