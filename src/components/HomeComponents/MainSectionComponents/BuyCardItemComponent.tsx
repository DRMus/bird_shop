import React from "react";
import ShoppingCartOutlined from "@ant-design/icons/lib/icons/ShoppingCartOutlined";

import WeightComponent from "./WeightComponent";
import { IBirdType, ISeedsItem } from "../../../interfaces";

interface Props {
  item: any;
  selectedWeight: number;
  hasWeight: boolean;
  isSell: boolean;
  weightHandler: (weight: number) => void;
}

const BuyCardItemComponent = ({ weightHandler, ...props }: Props) => {
  return (
    <div className="home-buy-card bg-white shadow-card flex flex-col gap-6 w-fit px-5 pt-5 pb-7 border border-gray-100 rounded-xl">
      <div className="home-buy-card--photo">
        <img src={props.item.image} alt={props.item.image} />
      </div>
      <div className="home-buy-card--description flex flex-col gap-1 w-64">
        <p className="font-bold text-2xl">{props.item.name}</p>
        <p className="text-gray-500 text-sm">{props.item.category}</p>
      </div>
      {props.isSell && (
        <div className="home-buy-card--cost">
          <p className="font-bold text-xl">{props.item.cost} руб.</p>
        </div>
      )}
      {props.hasWeight && (
        <WeightComponent
          id={props.item.id}
          selectedWeight={props.selectedWeight}
          weightHandler={weightHandler}
        />
      )}
      <div className="home-buy-card--actions flex justify-between">
        <button className="w-fit text-lg text-white px-8 py-2 rounded-md bg-mgreen transition-colors hover:bg-mstronggreen active:bg-mgreen">
          Подробнее
        </button>
        {props.isSell && (
          <button className="w-fit text-lg text-white py-1.5 px-2 rounded-md bg-white border border-gray-200 transition-colors hover:bg-gray-100 active:bg-gray-200">
            <ShoppingCartOutlined className="h-7 w-7 text-micon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default BuyCardItemComponent;
