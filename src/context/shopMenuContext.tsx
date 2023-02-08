import { createContext } from "react";

interface Context {
  dropDownIsActive: boolean;
  showDropDown: (state: boolean) => void;
}

const ShopMenuContext = createContext<Context>({
  dropDownIsActive: false,
  showDropDown: () => {},
});

export default ShopMenuContext;
