import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { IRootReducer } from ".";
import apiCategoryReducers from "./reducers/apiCategory.reducers";
import breadCrumbsReducers from "./reducers/breadCrumbs.reducers";
import cartReducers from "./reducers/cart.reducers";
import popUpReducers from "./reducers/popUp.reducers";
import tokenReducers from "./reducers/token.reducers";

const rootReducer = combineReducers<IRootReducer>({
  breadCrumbs: breadCrumbsReducers,
  tokenReducer: tokenReducers,
  ApiCatalogs: apiCategoryReducers,
  cartReducer: cartReducers,
  popUpReducer: popUpReducers
});

const middleware = [thunk];

const store = configureStore({ reducer: rootReducer, middleware: middleware });

export default store;
