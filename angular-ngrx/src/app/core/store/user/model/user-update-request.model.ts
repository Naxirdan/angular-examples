import { initialUserUpdatePayloadRequests, UserUpdatePayloadRequests } from './user-update-payload-request.model';

export interface UserUpdateRequests {
  payload: UserUpdatePayloadRequests;
  violations: Array<string>
}

export const initialUserUpdateRequests: UserUpdateRequests = {
  payload: initialUserUpdatePayloadRequests,
  violations: []
}
