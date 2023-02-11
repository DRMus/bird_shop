import { IBreadActions } from "..";
import { DROP_BREAD_CRUMBS, SET_BREAD_CRUMBS } from "../types";

const actions = {
  setBreadCrumbs: (level: number, ...items: string[] ) => ({
    type: SET_BREAD_CRUMBS,
    payload: items,
    level
  }),
  dropBreadCrumbs: (level: number) => ({
    type: DROP_BREAD_CRUMBS,
    level
  }),
};

export default actions;
