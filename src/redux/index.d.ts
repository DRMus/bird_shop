export interface IRootReduser {
  breadCrumbs: IInitialStateBread
}

export interface IInitialStateBread {
  breadCrumbs: string[];
}

export interface IAction<T> {
  type: string;
  payload?: T;
  level?: number; 
}

export type IBreadActions = { [id: string]: ([key]) => (IAction<string[]> | IDispatch) };
type IDispatch = (dispatch: any) => void
