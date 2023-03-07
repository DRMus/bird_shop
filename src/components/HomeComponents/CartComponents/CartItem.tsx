import React, { useState } from "react";
import ProductCounter from "../../TemplatesComponents/ProductCounter";

const CartItem = () => {
  const [selectedCount, setSelectedCount] = useState<number>(1);
  const changeCount = (operation: "-" | "+") => {
    switch (operation) {
      case "-":
        if (selectedCount - 1 <= 0) return;
        setSelectedCount((prev) => prev - 1);
        break;
      case "+":
        setSelectedCount((prev) => prev + 1);
        break;
      default:
        break;
    }
  };
  return (
    <div className="w-[700px] px-6 py-4 first:pt-6 flex justify-between border-b-msearchgray">
      <div className="left-side flex gap-4">
        <div className="img w-20 h-24 bg-slate-300"></div>
        <div className="flex flex-col justify-between gap-2">
          <div className="info flex flex-col">
            <p className="text-base text-micon font-medium">Название</p>
            <p className="text-xs text-mshadowgray">Артикул: 1</p>
          </div>
          <div className="cost flex gap-1.5 text-base font-medium">
            <p className="text-mshadowgray">Цена за 1 шт:</p>
            <p className="text-micon">1000 р.</p>
          </div>
        </div>
      </div>
      <div className="right-side flex flex-col items-center">
        <div className="counter grow flex items-center">
          <ProductCounter selectedCount={selectedCount} changeCount={changeCount} smallSize />
        </div>
        <div className="cost flex gap-1.5 text-base font-medium">
          <p className="text-mshadowgray">Итого:</p>
          <p className="text-micon">1000 р.</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
