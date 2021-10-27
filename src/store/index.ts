import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combinedReducers } from "./reducers";
import thunk from "redux-thunk";

const store = createStore(
  combinedReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
