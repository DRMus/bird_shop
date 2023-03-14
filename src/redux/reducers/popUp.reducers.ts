import { IAction, IInitialStatePopUp } from "..";
import { IPopUp } from "../../interfaces";
import { PopUpTypes } from "../types";

const initialState: IInitialStatePopUp = {
  popUpList: [],
};

export default (
  state: IInitialStatePopUp = initialState,
  action: IAction<IPopUp>
): IInitialStatePopUp => {
  switch (action.type) {
    case PopUpTypes.SET_POPUP:
      return { ...state, popUpList: [...state.popUpList, action.payload as IPopUp]};
    case PopUpTypes.DELETE_POPUP:
      return { ...state, popUpList: state.popUpList.slice(1) };
    default:
      return state;
  }
};
