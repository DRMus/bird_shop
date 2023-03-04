import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import HeaderComponent from "../../../components/HomeComponents/HeaderComponents/HeaderComponent";

const Header = () => {
  const [isAuthModuleActive, setIsAuthModuleActive] = useState<boolean>(false);

  const navigationTo = useNavigate();

  const showAuthModule = (state: boolean) => {
    setIsAuthModuleActive(state);
  };

  return (
    <HeaderComponent
      isAuthModuleActive={isAuthModuleActive}
      navigationTo={navigationTo}
      showAuthModule={showAuthModule}
    />
  );
};

export default React.memo(Header);
