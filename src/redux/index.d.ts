import { IShopItemTag } from "../interfaces/shopMenu";


export interface IRootReducer {
  breadCrumbs: IInitialStateBread;
  tokenReducer: IInitialStateToken;
  ApiCatalogs: IInitialStateCatalogs;
}

export interface IInitialStateBread {
  breadCrumbs: string[];
}

export interface IInitialStateToken {
  token: string;
  decodedToken: IDecodedToken | null;
  isExpired: boolean
}

export interface IInitialStateCatalogs {
  catalogList: IShopItemTag[] | null;
}


export interface IAction<T> {
  type: string;
  payload?: T;
  level?: number;
}

export type IBreadActions = { [id: string]: ([key]) => IAction<string[]> | IDispatch };
type IDispatch = (dispatch: any) => void;

export interface IDecodedToken {
  aud: string;
  exp: number;
  id: string;
  iss: string;
  phone_number: string;
}
