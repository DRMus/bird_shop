import { IAction } from "..";
import { ICartItem } from "../../interfaces";
import { CartTypes } from "../types";

const cartActions = {
  setItems: (payload: ICartItem[]): IAction<ICartItem[]> => ({
    type: CartTypes.SET_ELEMENT,
    payload,
  }),
};

export default cartActions;
