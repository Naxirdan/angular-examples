import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HttpErrorsResponseInterceptor implements HttpInterceptor {
  constructor(
    private toastr: ToastrService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    return next.handle(req.clone())
      .pipe(
        catchError((event) => {
          if (event instanceof HttpErrorResponse) {
            return this.handleError(event);
          }
        })
      );
  }

  private handleError(error: HttpErrorResponse): any {
    switch(error.status)
    {
      case 400:
        this.toastr.info(error.message, error.statusText, {progressBar: true})
        console.log(error)
        return throwError(error)
      case 401:
        console.error('Unauthorized', error)
        this.toastr.warning('Su sesión ha caducado!')
        return throwError(error)
      case 403:
        console.error('Forbidden', error);
        this.toastr.warning('Operación no permitida!');
        return throwError(error);
      case 409:
        this.toastr.info();
        console.log('Bad request', error);
        return throwError(error);
      case 500 || 405:
        console.error('An error occurred', error);
        this.toastr.error('Ocurrió un error!');
        return throwError(error);
      default:
        return throwError(error)
    }
  }
}
