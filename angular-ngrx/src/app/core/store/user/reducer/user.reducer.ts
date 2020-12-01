import { createReducer, on, Action } from "@ngrx/store";
import { UserResponse } from 'src/app/core/api/model/user-response.model';
import { LoadLoggedUserFail, LoadLoggedUserSuccess } from '../action/user.action';
import { initialUserStore, UserStore } from '../model/user-store.model';

const UserReducer = createReducer(
  { ...initialUserStore },
  on(LoadLoggedUserSuccess, onLoadLoggedUserSuccess),
  on(LoadLoggedUserFail, onLoadLoggedUserFail)
)

export function reducer(state: UserStore | undefined, action: Action) {
  return UserReducer(state, action);
}

function onLoadLoggedUserSuccess (state: UserStore, data: { payload: UserResponse }) {
  return {
    ...state,
  }
}

function onLoadLoggedUserFail (state: UserStore, data: { payload: string }) {
  return {
    ...state,
  }
}

