import React from "react";
import CartItem from "./CartItem";

const CartWithItems = () => {
  return (
    <>
      <div className="items">
        {[0, 1, 2].map((item, index) => (
          <CartItem key={index} />
        ))}
      </div>

      <div className="payment px-6 py-4 flex justify-end last:pb-6">
        <button
          type="submit"
          className="text-base text-white px-10 py-2 rounded-xl bg-mgreen transition-colors hover:bg-mstronggreen active:bg-mgreen"
        >
          Заказать
        </button>
      </div>
    </>
  );
};

export default CartWithItems;
