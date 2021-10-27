import { ReduxAction } from "../../interfaces/redux-action.interface";
import { User } from "../../interfaces/user.interface";
import { AuthTypes } from "../types/auth.types";
import { AuthState } from "../../interfaces/redux-state.interface";

const initialState: AuthState = {
  loading: false,
  currentUser: null
};

const authReducer = (
  state = initialState,
  action: ReduxAction<boolean | User>
) => {
  switch (action.type) {
    case AuthTypes.LOGIN_REQUEST:
      return { ...state, loading: true };
    case AuthTypes.LOGIN_SUCCESS:
      return {
        loading: false,
        currentUser: action.payload
      };
    case AuthTypes.LOGIN_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default authReducer;
