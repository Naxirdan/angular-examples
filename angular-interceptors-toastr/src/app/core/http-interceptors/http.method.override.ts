import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';


@Injectable()
export class HttpMethodOverrideInterceptor implements HttpInterceptor {
  constructor() {}

  private static setXHttpMethodOverrideHeader(req: HttpRequest<any>): HttpRequest<any> {

      if (req.method === 'PUT') {
        return req.clone({ method: 'POST', setHeaders: { 'X-HTTP-Method-Override': 'PUT' } });
      }
      if (req.method === 'PATCH') {
        return req.clone({ method: 'POST', setHeaders: { 'X-HTTP-Method-Override': 'PATCH' } });
      }
      if (req.method === 'DELETE') {
        return req.clone({ method: 'POST', setHeaders: { 'X-HTTP-Method-Override': 'DELETE' } });
      }

      return req.clone();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(HttpMethodOverrideInterceptor.setXHttpMethodOverrideHeader(req));
  }
}
