import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from "rxjs";
import { UserResponse } from 'src/app/core/api/model/user-response.model';
import { UserApi } from 'src/app/core/api/user.api';
import { LoadLoggedUserSuccess, LoadLoggedUserFail, UserActionTypes } from '../action/user.action';

@Injectable()

export class UserEffects {
  constructor(private api: UserApi, private actions$: Actions) { }

  loadUserLogged = createEffect(() =>
    this.actions$.pipe(
    ofType(UserActionTypes.LoadLoggedUser),
    mergeMap(() => {
      return this.api.getUserLogged$().pipe(map((user: UserResponse) =>
        LoadLoggedUserSuccess({payload: user})),
        catchError(err => of(LoadLoggedUserFail({payload: err.message}))))
    })
  ))

}

