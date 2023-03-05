import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { IRootReducer } from ".";
import breadCrumbsReducers from "./reducers/breadCrumbs.reducers";
import tokenReducers from "./reducers/token.reducers";

const rootReducer = combineReducers<IRootReducer>({
  breadCrumbs: breadCrumbsReducers,
  tokenReducer: tokenReducers,
});

const middleware = [thunk];

const store = configureStore({ reducer: rootReducer, middleware: middleware });

export default store;
