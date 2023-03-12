import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CartComponent from "../../components/HomeComponents/CartComponents/CartComponent";
import { ICartItem } from "../../interfaces";
import { IRootReducer } from "../../redux";
import { getCart } from "../../redux/selectors/cart.selectors";

const Cart = () => {
  const [isCartActive, setIsCartActive] = useState<boolean>(false);
  const [itemsCount, setItemsCount] = useState(0);
  
  const cartItems = useSelector<IRootReducer, ICartItem[]>(getCart);

  const showCartElement = (state: boolean) => {
    setIsCartActive(state);
  };

  useEffect(() => {
    setItemsCount(cartItems.length);
  }, [cartItems])

  return (
    <CartComponent
      isCartActive={isCartActive}
      itemsCount={itemsCount}
      onClick={() => showCartElement(!isCartActive)}
      showCartElement={showCartElement}
    />
  );
};

export default Cart;
