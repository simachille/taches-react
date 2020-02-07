/**
 * 3 - fusion de tous les reducers
 */

import authenticationReducer from "./authentication-reducer";
import taskReducer from "./tasks-reducer";
import { combineReducers } from "redux";

const appReducers = combineReducers({
  authenticationReducer,
  taskReducer
});

export default appReducers;
