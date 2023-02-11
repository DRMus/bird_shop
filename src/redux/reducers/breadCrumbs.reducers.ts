import { IAction, IInitialStateBread } from "..";
import { DROP_BREAD_CRUMBS, SET_BREAD_CRUMBS } from "../types";

const initialState: IInitialStateBread = {
  breadCrumbs: ["Каталог"],
};

export default (
  state: IInitialStateBread = initialState,
  action: IAction<string[]>
): IInitialStateBread => {
  switch (action.type) {
    case SET_BREAD_CRUMBS:
      if (!action.payload) return state;
      const slicedArray = state.breadCrumbs.slice(0, action.level);
      slicedArray.push(...action.payload);
      return { ...state, breadCrumbs: slicedArray };
    case DROP_BREAD_CRUMBS:
      return { ...state, breadCrumbs: state.breadCrumbs.slice(0, action.level) };
    default:
      return state;
  }
};
