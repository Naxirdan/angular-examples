import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { UserResponse } from './model/user-response.model';

@Injectable({
  providedIn: 'root'
})

export class UserApi {

  private urlApi: string

  constructor(private http: HttpClient) {
    this.urlApi = "https://jsonplaceholder.typicode.com/users/1"
  }

  getUserLogged$ = (): Observable<UserResponse> => {
     return this.http.get(this.urlApi).pipe(map(res => {
      return res as UserResponse
    }))
  }
}
