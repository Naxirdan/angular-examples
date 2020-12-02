import { initialUserUpdateRequests, UserUpdateRequests } from './user-update-request.model';
import { UserLoginPayload, initialUserLoginPayload } from './user-login-payload.model'

export interface UserRequests {
  updateRequest: UserUpdateRequests;
  userLoginPayload: UserLoginPayload
}

export const initialUserRequests: UserRequests = {
  updateRequest: initialUserUpdateRequests,
  userLoginPayload: initialUserLoginPayload
}
