import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TestInterceptorApi {

  constructor(private http: HttpClient) { }

  get400Api$ = (): Observable<any> => {
    return this.http.post('https://reqres.in/api/login', { email: 'peter@klaven' }).pipe(map(res => {
      return res;
    }))
  }

}
