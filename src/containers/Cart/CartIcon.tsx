import React, { useRef, useState } from "react";
import CartComponent from "../../components/HomeComponents/CartComponents/CartComponent";

const Cart = () => {
  const [isCartActive, setIsCartActive] = useState<boolean>(false);

  const showCartElement = (state: boolean) => {
    setIsCartActive(state);
  };

  return (
    <CartComponent
      isCartActive={isCartActive}
      onClick={() => showCartElement(!isCartActive)}
      showCartElement={showCartElement}
    />
  );
};

export default Cart;
