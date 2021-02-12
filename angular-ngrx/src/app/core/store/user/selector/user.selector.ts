import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserStore } from '../model/user-store.model';
import { State } from '../../index';
import { UserLoginPayload } from '../model/user-login-payload.model';

export const selectUserState = createFeatureSelector<State, UserStore>('user');

export const getUser = createSelector(selectUserState, (state: UserStore): UserStore => {
  return {...state};
});

export const getUserLoginPayload = createSelector(selectUserState, (state: UserStore): UserLoginPayload => {
  return {...state.requests.userLoginPayload}
})
