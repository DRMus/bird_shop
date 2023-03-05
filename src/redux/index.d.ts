export interface IRootReducer {
  breadCrumbs: IInitialStateBread;
  tokenReducer: IInitialStateToken;
}

export interface IInitialStateBread {
  breadCrumbs: string[];
}

export interface IAction<T> {
  type: string;
  payload?: T;
  level?: number;
}

export type IBreadActions = { [id: string]: ([key]) => IAction<string[]> | IDispatch };
type IDispatch = (dispatch: any) => void;

export interface IInitialStateToken {
  token: string;
  decodedToken: IDecodedToken | null;
  isExpired: boolean
}

export interface IDecodedToken {
  aud: string;
  exp: number;
  id: string;
  iss: string;
  phone_number: string;
}
