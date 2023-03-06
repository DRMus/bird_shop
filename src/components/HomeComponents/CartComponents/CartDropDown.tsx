import React, { useRef } from "react";
import useOutsideAlerter from "../../../utils/useOutsideAlerter";

interface Props {
  showCartElement: (state: boolean) => void;
}

const CartDropDown = ({showCartElement, ...props}: Props) => {
  const cartRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(cartRef, showCartElement);

  return <div ref={cartRef} className="drop-down absolute top-full right-0">CartDropDown</div>;
};

export default CartDropDown;
