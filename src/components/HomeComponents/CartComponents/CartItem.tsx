import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ICartItem } from "../../../interfaces";
import { changeCartItem } from "../../../utils/cartOperations";
import ProductCounter from "../../TemplatesComponents/ProductCounter";

interface Props {
  item: ICartItem;
}

const CartItem = (props: Props) => {
  const [selectedCount, setSelectedCount] = useState<number>(props.item.count);

  const dispatch = useDispatch();

  const changeCount = (operation: "-" | "+") => {
    switch (operation) {
      case "-":
        if (selectedCount - 1 <= 0) return;
        setSelectedCount((prev) => prev - 1);
        changeCartItem(props.item, selectedCount - 1, dispatch);
        break;
      case "+":
        setSelectedCount((prev) => prev + 1);
        changeCartItem(props.item, selectedCount + 1, dispatch);

        break;
      default:
        break;
    }
  };

  const getWeightString = () =>
    props.item.weight
      ? props.item.weight < 1000
        ? `(${props.item.weight} г.)`
        : `(${(props.item.weight / 1000).toFixed(0)} кг.)`
      : undefined;
      
  return (
    <div className="w-[700px] px-6 py-4 first:pt-6 flex justify-between border-b border-b-msearchgray">
      <div className="left-side flex gap-4">
        <div className="img w-20 h-24 flex items-center">
          <img src={`${props.item.product.image}`} alt="Птички" className="object-contain" />
        </div>
        <div className="flex flex-col justify-between gap-2">
          <div className="info flex flex-col">
            <p className="text-base text-micon font-medium">
              {props.item.product.name} {getWeightString()}
            </p>
            <p className="text-xs text-mshadowgray">Артикул: {props.item.product.product_id}</p>
          </div>
          <div className="cost flex gap-1.5 text-base font-medium">
            <p className="text-mshadowgray">Цена за 1 шт:</p>
            <p className="text-micon">{props.item.product.cost} р.</p>
          </div>
        </div>
      </div>
      <div className="right-side flex flex-col items-end">
        <div className="counter grow flex items-center">
          <ProductCounter selectedCount={selectedCount} changeCount={changeCount} smallSize />
        </div>
        <div className="cost flex gap-1.5 text-base font-medium">
          <p className="text-mshadowgray">Итого:</p>
          <p className="text-micon">{props.item.total_cost} р.</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
