import { IRootReducer } from "..";

export const getTokenReducer = (state: IRootReducer) => state.tokenReducer;
export const getToken = (state: IRootReducer) => state.tokenReducer.token;
export const getIsExpired = (state: IRootReducer) => state.tokenReducer.isExpired;
export const getDecodedToken = (state: IRootReducer) => state.tokenReducer.decodedToken;