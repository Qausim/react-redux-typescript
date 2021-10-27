import { User } from "./user.interface";

interface BaseState {
  loading: boolean;
}

export interface AuthState extends BaseState {
  currentUser: null | User;
}

export interface ReduxState {
  auth: AuthState;
}
