import { IAction, IInitialStateCatalogs } from "..";
import { ApiCatalogs } from "../types";

const initialState: IInitialStateCatalogs = {
  catalogList: null
};

export default (
  state: IInitialStateCatalogs = initialState,
  action: IAction<any>
): IInitialStateCatalogs => {
  switch (action.type) {
    case ApiCatalogs.SET_CATALOGS:
      return { ...state, catalogList: action.payload};
    default:
      return state;
  }
};