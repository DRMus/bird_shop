import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import HeaderComponent from "../../../components/HomeComponents/HeaderComponents/HeaderComponent";
import { IRootReducer } from "../../../redux";
import tokenActions from "../../../redux/actions/token.actions";
import { getIsExpired, getToken } from "../../../redux/selectors/token.selectors";

const Header = () => {
  const [isAuthModuleActive, setIsAuthModuleActive] = useState<boolean>(false);
  const redirectTo = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector<IRootReducer, string>(getToken);
  const isExpired = useSelector<IRootReducer, boolean>(getIsExpired);

  const showAuthModule = useCallback((state: boolean) => {
    tokenActions
      .checkToken()(dispatch)
      .then(() => {
        console.log(isExpired)
        isExpired ? setIsAuthModuleActive(state) : redirectTo("/profile");
      });
  }, [isExpired]);

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
