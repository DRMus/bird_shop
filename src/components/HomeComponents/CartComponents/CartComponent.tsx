import { ShoppingCartOutlined } from "@ant-design/icons";
import classNames from "classnames";
import React from "react";
import CartDropDown from "./CartDropDown";

interface Props {
  isCartActive: boolean;
  showCartElement: (state: boolean) => void;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const CartComponent = ({ onClick, showCartElement, ...props }: Props) => {
  return (
    <div className="shop-info--cart relative cursor-pointer" onClick={onClick}>
      <ShoppingCartOutlined
        className={classNames("h-7 w-7 transition-colors duration-300", {
          "text-micon": !props.isCartActive,
          "text-mgreen": props.isCartActive,
        })}
      />

      {props.isCartActive ? (
        <CartDropDown showCartElement={showCartElement} />
      ) : (
        <>
          <div className="animate-ping w-3 h-3 absolute -top-0.5 -right-0.5 bg-mstronggreen rounded-full"></div>
          <div className="shop-info--cart--prod-count text-xs text-center bg-mstronggreen w-4 h-4 absolute -top-1 -right-1 rounded-full text-white">
            2
          </div>
        </>
      )}
    </div>
  );
};

export default CartComponent;