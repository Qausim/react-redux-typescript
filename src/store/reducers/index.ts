import { combineReducers } from "redux";
import authReducer from "./auth.reducer";

// if we multiple reducers we have to combine them
export const combinedReducers = combineReducers({
  auth: authReducer
  // posts: ''
});
