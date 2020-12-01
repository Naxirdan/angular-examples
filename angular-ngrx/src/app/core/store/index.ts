import {
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { UserStore } from './user/model/user-store.model';
import { reducer as UserReducer } from './user/reducer/user.reducer'
export interface State {
  user: UserStore;
}

export const reducers: ActionReducerMap<State> = {
  user: UserReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
