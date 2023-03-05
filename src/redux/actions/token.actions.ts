import { TokenTypes } from "../types";

const tokenActions = {
  getToken: () => ({
    type: TokenTypes.GET_JWTTOKEN,
  }),
  checkToken: () => async (dispatch: any) => {
    await dispatch(tokenActions.getToken());
    await dispatch({ type: TokenTypes.CHECK_TOKEN });
  },
};

export default tokenActions;
