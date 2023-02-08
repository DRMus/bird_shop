
import { useEffect, useState } from "react";
import ShopMenuComponent from "../components/HomeComponents/HeaderComponents/ShopMenuComponent";
import ShopMenuContext from "../context/shopMenuContext";

const ShopMenu = () => {
  const [dropDownIsActive, setDropDownIsActive] = useState<boolean>(false);

  const showDropDown = (state: boolean) => {
    setDropDownIsActive(state)
  };

  return (
    <ShopMenuContext.Provider
      value={{
        dropDownIsActive,
        showDropDown,
      }}
    >
      <ShopMenuComponent />
    </ShopMenuContext.Provider>
  );
};

export default ShopMenu;
