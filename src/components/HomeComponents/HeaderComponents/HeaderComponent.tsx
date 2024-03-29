import { PhoneOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import classNames from "classnames";
import { NavigateFunction } from "react-router";
import CartIcon from "../../../containers/Cart/CartIcon";
import ShopMenu from "../../../containers/Home/Header/ShopMenu";

import logo from "../../../img/png/logo.png";
import AuthDropDownComponent from "./AuthDropDownComponent";

interface Props {
  isAuthModuleActive: boolean;
  isExpired: boolean;
  redirectTo: NavigateFunction;
  showAuthModule: (state: boolean) => void;
}

const HeaderComponent = ({ redirectTo, showAuthModule, ...props }: Props) => {
  return (
    <div className="bg-white w-full h-52 shadow-header flex justify-center items-center">
      <div className="shop-info--split-lines flex flex-col gap-12 w-mscreen">
        <div className="shop-info flex">
          <div className="shop-info--logo grow">
            <img
              src={logo}
              alt="Логотип"
              className="cursor-pointer"
              onClick={(e) => redirectTo("/")}
            />
          </div>
          <div className="shop-info--client flex items-center gap-16">
            <div className="shop-info--client--num flex flex-row items-center gap-2 transition-colors hover:text-mgreen hover:fill-mgreen">
              <PhoneOutlined rotate={90} className="h-6 w-6 fill-micon" />
              <a href="tel:+78005553535" className="font-light text-lg">
                8 800 555 35 35
              </a>
            </div>
            <div className="shop-info--client--actions flex gap-3">
              <CartIcon/>
              <div className="shop-info--profile relative">
                <UserOutlined
                  className={classNames("h-7 w-7 transition-colors duration-300 cursor-pointer ", {
                    "text-mgreen": props.isAuthModuleActive,
                    "text-micon": !props.isAuthModuleActive,
                  })}
                  onClick={(e) => showAuthModule(!props.isAuthModuleActive)}
                />

                {props.isAuthModuleActive && props.isExpired && (
                  <AuthDropDownComponent showAuthModule={showAuthModule} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="shop-actions flex items-center pb-2">
          <ShopMenu />
          {/* <input
            type="text"
            className="w-1/4 p-4 py-3.5 bg-msearchgray outline-none rounded-xl border border-gray-300 focus:border-gray-400"
            placeholder="Поиск"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
