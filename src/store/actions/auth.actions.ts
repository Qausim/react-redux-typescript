import { AuthTypes } from "../types/auth.types";
import apiClient from "../../config/axios.config";
import { Dispatch } from "react";
import { User } from "../../interfaces/user.interface";

interface AuthDispatchType {
  type: string;
  payload?: null | User;
}

export default class AuthActions {
  static signin() {
    return async (dispatch: Dispatch<AuthDispatchType>) => {
      try {
        dispatch({
          type: AuthTypes.LOGIN_REQUEST
        });
        const { data }: { data: User } = await apiClient.get("/users/1");
        dispatch({
          type: AuthTypes.LOGIN_SUCCESS,
          payload: data
        });

        return data;
      } catch (error) {
        dispatch({
          type: AuthTypes.LOGIN_FAILURE
        });
      }
    };
  }
}
