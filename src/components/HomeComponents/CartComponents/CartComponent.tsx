import { ShoppingCartOutlined } from "@ant-design/icons";
import classNames from "classnames";
import React from "react";
import { ICartItem } from "../../../interfaces";
import CartDropDown from "./CartDropDown";

interface Props {
  isCartActive: boolean;
  itemsCount: number;
  showCartElement: (state: boolean) => void;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const CartComponent = ({ onClick, showCartElement, ...props }: Props) => {
  return (
    <div className="shop-info--cart relative">
      <ShoppingCartOutlined
        className={classNames("h-7 w-7 transition-colors duration-300 cursor-pointer", {
          "text-micon": !props.isCartActive,
          "text-mgreen": props.isCartActive,
        })}
        onClick={onClick}
      />

      {props.isCartActive ? (
        <CartDropDown showCartElement={showCartElement} />
      ) : props.itemsCount ? (
        <>
          <div className="animate-ping w-3 h-3 absolute -top-0.5 -right-0.5 bg-mstronggreen rounded-full cursor-pointer"></div>
          <div
            className="shop-info--cart--prod-count text-xs text-center bg-mstronggreen w-4 h-4 absolute -top-1 -right-1 rounded-full text-white z-50 cursor-pointer"
            onClick={onClick}
          >
            {props.itemsCount}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default CartComponent;
