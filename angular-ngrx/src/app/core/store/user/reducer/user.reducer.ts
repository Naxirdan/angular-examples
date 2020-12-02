import { createReducer, on, Action } from "@ngrx/store";
import { UserResponse } from 'src/app/core/api/model/user-response.model';
import { LoadLoggedUserFail, LoadLoggedUserSuccess, UpdateUserLoginPayload } from '../action/user.action';
import { initialUserStore, UserStore } from '../model/user-store.model';

const UserReducer = createReducer(
  { ...initialUserStore },
  on(LoadLoggedUserSuccess, onLoadLoggedUserSuccess),
  on(LoadLoggedUserFail, onLoadLoggedUserFail),
  on(UpdateUserLoginPayload, onUpdateUserLoginPayload)
)

export function reducer(state: UserStore | undefined, action: Action) {
  return UserReducer(state, action);
}

function onLoadLoggedUserSuccess(state: UserStore, data: { payload: UserResponse }) {
  return {
    ...state,
  }
}

function onLoadLoggedUserFail(state: UserStore, data: { payload: string }) {
  return {
    ...state,
  }
}

function onUpdateUserLoginPayload(state: UserStore, data: { property: string, value: string }) {
  return {
    ...state,
    requests: {
      ...state.requests,
      userLoginPayload: {
        ...state.requests.userLoginPayload,
        [data.property]: data.value
      }
    }
  }
}

