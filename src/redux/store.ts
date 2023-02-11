import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import breadCrumbsReducers from "./reducers/breadCrumbs.reducers";

const rootReducer = combineReducers({ breadCrumbs: breadCrumbsReducers });

const middleware = [thunk];

const store = configureStore({ reducer: rootReducer, middleware: middleware });

export default store;