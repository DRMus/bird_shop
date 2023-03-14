import { AxiosError } from "axios";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { PopUpContextValues } from "../../../context/PopUpContext";
import { ICartItem } from "../../../interfaces";
import { IOrderItem } from "../../../interfaces/api";
import { IInitialStateToken, IRootReducer } from "../../../redux";
import { getTokenReducer } from "../../../redux/selectors/token.selectors";
import addDays from "../../../utils/addDays";
import fetchOrders from "../../../utils/Api/fetchOrders";
import { getTotalPrice } from "../../../utils/cartOperations";
import CartItem from "./CartItem";

interface Props {
  cartItems: ICartItem[];
}

const CartWithItems = (props: Props) => {
  const { addPopUp } = useContext(PopUpContextValues);
  const { token, decodedToken, isExpired } = useSelector<IRootReducer, IInitialStateToken>(
    getTokenReducer
  );

  const configOrderItem = () => {
    if (isExpired || !decodedToken) {
      addPopUp("error", "Ошибка: Требуется авторизация");

      return;
    }

    let newOrderItem: IOrderItem = {
      user_id: Number.parseInt(decodedToken.id),
      sum_cost: getTotalPrice(props.cartItems),
      state: 1,
      delivery_date: addDays(new Date(), 3),
      User: null,
      orderProducts: props.cartItems,
    };

    fetchOrders
      .postOrder(newOrderItem)
      .then((resp) => {
        addPopUp("done", "Заказ оформлен");
      })
      .catch((err: AxiosError) => {
        if (err.code) {
          addPopUp("error", "Ошибка: Заказ не оформлен");
          return;
        }
        addPopUp("error", "Ошибка: Сервер не отвечает");
      });
  };
  return (
    <>
      <div className="items max-h-[525px] overflow-auto">
        {props.cartItems.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </div>

      <div className="payment px-6 py-4 flex justify-between items-center last:pb-6">
        <div className="total flex gap-1.5 text-xl font-medium">
          <p className="text-mshadowgray">Сумма:</p>
          <p className="text-micon">{getTotalPrice(props.cartItems)} р.</p>
        </div>
        <button
          type="submit"
          className="text-base text-white px-10 py-2 rounded-xl bg-mgreen transition-colors hover:bg-mstronggreen active:bg-mgreen"
          onClick={configOrderItem}
        >
          Заказать
        </button>
      </div>
    </>
  );
};

export default CartWithItems;
