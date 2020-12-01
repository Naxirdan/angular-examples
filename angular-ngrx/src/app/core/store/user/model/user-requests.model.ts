import { initialUserUpdateRequests, UserUpdateRequests } from './user-update-request.model';

export interface UserRequests {
  updateRequest: UserUpdateRequests;
}

export const initialUserRequests: UserRequests = {
  updateRequest: initialUserUpdateRequests,
}
