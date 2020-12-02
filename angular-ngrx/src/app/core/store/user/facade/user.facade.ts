import { Injectable } from "@angular/core";
import { UserStore } from 'src/app/core/store/user/model/user-store.model';
import { Store } from '@ngrx/store';
import { UpdateUserLoginPayload } from 'src/app/core/store/user/action/user.action';
import { getUserLoginPayload } from '../selector/user.selector'

@Injectable({
  providedIn: 'root'
})

export class UserFacade {
  constructor(private store: Store<UserStore>) { }

  /** Dispatcher actions */

  updatePayload = (payload: {property: string, value: string}) => this.store.dispatch(UpdateUserLoginPayload(payload))

  /** END Dispatcher actions */

  /** Selectors */

  getLoginPayload = () => this.store.select(getUserLoginPayload)

  /** End Selector */

}
