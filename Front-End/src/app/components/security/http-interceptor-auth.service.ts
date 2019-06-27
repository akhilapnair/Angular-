import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorAuthService implements HttpInterceptor {

  constructor() { }
  intercept(request : HttpRequest<any>,next : HttpHandler) {
    let username = 'abc';
    let password = 'abc';
    let basicAuth = 'Basic '+ window.btoa(username + ':' + password);
    request  = request.clone({
      setHeaders: {
        Authorization : basicAuth
      }
    })
    return next.handle(request)
  }

}
