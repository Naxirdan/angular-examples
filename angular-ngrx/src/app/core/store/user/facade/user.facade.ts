import { Injectable } from "@angular/core";
import { UserStore } from 'src/app/core/store/user/model/user-store.model';
import { Store } from '@ngrx/store';
import { UpdateUserLoginPayload } from 'src/app/core/store/user/action/user.action';
import { getUserLoginPayload } from '../selector/user.selector'
import { Observable } from 'rxjs';
import { UserLoginPayload } from '../model/user-login-payload.model';
import { State } from '../../index';

@Injectable({
  providedIn: 'root'
})

export class UserFacade {
  constructor(private store: Store<State>) { }

  /** Dispatcher actions */

  updatePayload = (payload: { property: string, value: string }): void => this.store.dispatch(UpdateUserLoginPayload(payload))

  /** END Dispatcher actions */

  /** Selectors */

  getLoginPayload$ = (): Observable<UserLoginPayload> => this.store.select(getUserLoginPayload)

  /** End Selector */

}
