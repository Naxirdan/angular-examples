import { UserRequests, initialUserRequests} from './user-requests.model'

export interface UserStore {
  result: [];
  requests: UserRequests;
}

export const initialUserStore: UserStore = {
  result: [],
  requests: initialUserRequests,
}
