import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserStore } from '../model/user-store.model';

export const selectUserState = createFeatureSelector<UserStore, UserStore>('user');

export const getUser = createSelector(selectUserState, (state: UserStore): UserStore => {
  return {...state};
});

export const getUserLoginPayload = createSelector(selectUserState, (state: UserStore): UserStore => {
  return {...state}
})
