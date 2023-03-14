import { IAction } from "..";
import { IPopUp } from "../../interfaces";
import { PopUpTypes } from "../types";

const popUpActions = {
  setItem: (payload: IPopUp): IAction<IPopUp> => ({
    type: PopUpTypes.SET_POPUP,
    payload,
  }),
  deleteItem: () => ({
    type: PopUpTypes.DELETE_POPUP
  })
};

export default popUpActions;
