import { IRootReducer } from "..";

export const getCart = (state: IRootReducer) => state.cartReducer.cartElements;