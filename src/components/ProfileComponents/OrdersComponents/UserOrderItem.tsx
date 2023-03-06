import React from "react";
import OrderState from "./OrderState";

interface Props {

}

const UserOrderItem = (props: Props) => {
  return (
    <div className="flex px-8 py-4 justify-between border-b border-msearchgray">
      <div className="left-side flex flex-col gap-4">
        <div className="header flex flex-col gap-1">
          <p className="text-lg font-medium text-micon">Заказ №102</p>
          <p className="text-sm text-mshadowgray">Количество: 5</p>
        </div>

        <div className="flex gap-2">
          <div className="w-16 h-16 bg-slate-300 rounded-lg"></div>
          <div className="w-16 h-16 bg-slate-300 rounded-lg"></div>
          <div className="w-16 h-16 bg-slate-300 rounded-lg"></div>
        </div>

        <div className="sum-cost flex gap-1.5">
          <p className="text-lg text-mshadowgray">Итого:</p>
          <p className="text-lg font-medium text-micon">1000 р.</p>
        </div>
      </div>
      <div className="right-side flex flex-col justify-center items-center gap-2">
        <p className="text-base text-mshadowgray">Статус:</p>
        <OrderState state={2}/>
      </div>
    </div>
  );
};

export default UserOrderItem;
