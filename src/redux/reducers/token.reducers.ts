import { IAction, IInitialStateToken } from "..";
import checkToken from "../../utils/checkToken";
import { TokenTypes } from "../types";

const initialState: IInitialStateToken = {
  token: "",
  decodedToken: null,
  isExpired: true,
};

export default (
  state: IInitialStateToken = initialState,
  action: IAction<string[]>
): IInitialStateToken => {
  switch (action.type) {
    case TokenTypes.GET_JWTTOKEN:
      return { ...state, token: localStorage.getItem("token") || "" };
    case TokenTypes.CHECK_TOKEN:
      return checkToken(state);
    default:
      return state;
  }
};
