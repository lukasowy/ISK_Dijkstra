import { combineReducers } from "redux";
import displayReducer from "./display-reducer";
import edgesReducer from "./edges-reducer";

// console.log(displayReducer, "display-reducer")

export const allReducers = combineReducers({
  display: displayReducer,
  edges: edgesReducer
});