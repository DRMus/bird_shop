import React from "react";
import { IOrderItem } from "../../../interfaces/api";
import OrderState from "./OrderState";

interface Props {
  order: IOrderItem;
}

const UserOrderItem = (props: Props) => {
  const getDate = (date: Date | string) => {
    let currentDate = new Date(date)
    return `${currentDate.getDate()}.${currentDate.getMonth()}.${currentDate.getFullYear()}`;
  };
  return (
    <div className="flex flex-col px-8 py-4 gap-4">
      <div className="info flex justify-between">
        <div className="left-side flex flex-col gap-4">
          <div className="header flex flex-col gap-1">
            <p className="text-lg font-medium text-micon">Заказ №{props.order.order_id}</p>
            <p className="text-sm text-mshadowgray">
              Количество: {props.order.orderProducts?.length || 0}
            </p>
          </div>

          <div className="flex gap-2">
            {props.order.orderProducts?.map((item, index) => (
              <img
                className="w-16 h-16 rounded-lg"
                src={item.product.image}
                key={index}
              ></img>
            ))}
          </div>
        </div>
        <div className="right-side flex flex-col justify-center items-center gap-2">
          <p className="text-base text-mshadowgray">Статус:</p>
          <OrderState state={props.order.state || 2} />
        </div>
      </div>
      <div className="footer flex justify-between w-full">
        <div className="sum-cost flex gap-1.5">
          <p className="text-lg text-mshadowgray">Итого:</p>
          <p className="text-lg font-medium text-micon">{props.order.sum_cost} р.</p>
        </div>
        <div className="data flex gap-1.5">
          <p className="text-lg text-mshadowgray">Дата доставки:</p>
          <p className="text-lg font-medium text-micon">{getDate(props.order.delivery_date)}</p>
        </div>
      </div>
    </div>
  );
};

export default UserOrderItem;
