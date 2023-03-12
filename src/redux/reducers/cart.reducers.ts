import { IAction, IInitialStateCart } from "..";
import { ICartItem } from "../../interfaces";
import { CartTypes } from "../types";

const initialState: IInitialStateCart = {
  cartElements: [],
};

export default (
  state: IInitialStateCart = initialState,
  action: IAction<ICartItem[]>
): IInitialStateCart => {
  switch (action.type) {
    case CartTypes.SET_ELEMENT:
    localStorage.setItem("user-cart", JSON.stringify(action.payload));
      return { ...state, cartElements: action.payload as ICartItem[]};
    default:
      return state;
  }
};
