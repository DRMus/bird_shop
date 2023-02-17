import { IBreadActions } from "..";
import { BreadCrumbsTypes } from "../types";

const actions = {
  setBreadCrumbs: (level: number, ...items: string[] ) => ({
    type: BreadCrumbsTypes.SET_BREAD_CRUMBS,
    payload: items,
    level
  }),
  dropBreadCrumbs: (level: number) => ({
    type: BreadCrumbsTypes.DROP_BREAD_CRUMBS,
    level
  }),
};

export default actions;
