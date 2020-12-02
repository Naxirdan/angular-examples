export interface UserLoginPayload {
  username: string;
  password: string,
}

export const initialUserLoginPayload: UserLoginPayload = {
  username: '',
  password: '',
}
