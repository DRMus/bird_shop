import jwtDecode from "jwt-decode";
import { IDecodedToken, IInitialStateToken } from "../redux";

export default (state: IInitialStateToken) => {
  if (!state.token) {
    return state;
  }

  let decodedToken: IDecodedToken;
  let currentTime: number;
  let isExpired: boolean = false;

  try {
    decodedToken = jwtDecode(state.token);
  } catch (error) {
    console.error("не лезь в сторедж!!!! Мошенник");
    return state;
  }

  currentTime = Math.floor(new Date().getTime() / 1000);

  if (currentTime > decodedToken.exp) {
    isExpired = true;
  }

  return { ...state, decodedToken, isExpired };
};
