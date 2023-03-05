import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import HeaderComponent from "../../../components/HomeComponents/HeaderComponents/HeaderComponent";
import { IRootReducer } from "../../../redux";
import tokenActions from "../../../redux/actions/token.actions";

const getToken = (state: IRootReducer) => state.tokenReducer.token;
const getIsExpired = (state: IRootReducer) => state.tokenReducer.isExpired;

const Header = () => {
  const [isAuthModuleActive, setIsAuthModuleActive] = useState<boolean>(false);
  const redirectTo = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector<IRootReducer, string>(getToken);
  const isExpired = useSelector<IRootReducer, boolean>(getIsExpired);

  const showAuthModule = (state: boolean) => {
    setIsAuthModuleActive(state);
  };

  useEffect(() => {
    tokenActions.checkToken()(dispatch);
  }, [token]);

  return (
    <HeaderComponent
      isAuthModuleActive={isAuthModuleActive}
      isExpired={isExpired}
      redirectTo={redirectTo}
      showAuthModule={showAuthModule}
    />
  );
};

export default React.memo(Header);
