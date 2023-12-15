import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})
export class RequestInterceptor implements HttpInterceptor {
  
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
     const modifiedRequest = request.clone({
      setHeaders: {
        'token': '123123123123123'
      }
    });
    console.log('Request intercepted!!!!!!!!!!!!!!!:', modifiedRequest);
    return next.handle(modifiedRequest);
  }
}