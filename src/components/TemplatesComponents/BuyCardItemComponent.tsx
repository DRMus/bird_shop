import React, { useContext } from "react";
import ShoppingCartOutlined from "@ant-design/icons/lib/icons/ShoppingCartOutlined";

import WeightComponent from "./WeightComponent";
import { IProductItem } from "../../interfaces/api";
import { PopUpContextValues } from "../../context/PopUpContext";
import { IPopUp } from "../../interfaces";

interface Props {
  item: IProductItem;
  selectedWeight: number;
  hasWeight?: boolean;
  isSell?: boolean;
  weightHandler: (weight: number) => void;
  redirectToCard: (id: string | number) => void;
  createCartElement: () => void;
  totalCost: () => string;
}

const BuyCardItemComponent = ({
  weightHandler,
  redirectToCard,
  createCartElement,
  ...props
}: Props) => {
  
  return (
    <div className="home-buy-card bg-white shadow-card flex flex-col gap-6 w-fit px-5 pt-5 pb-7 border border-gray-100 rounded-xl">
      <div className="home-buy-card--photo w-[275px] h-[230px] flex items-center justify-center">
        <img src={props.item.image} alt={"картинка"} className="object-contain w-full h-full" />
      </div>
      <div className="home-buy-card--description flex flex-col gap-1 w-64">
        <p className="font-bold text-2xl h-[30px] truncate" title={props.item.name}>
          {props.item.name}
        </p>
        <p className="text-gray-500 text-sm h-[20px] truncate">{props.item.second_name}</p>
      </div>
      {props.isSell && (
        <div className="home-buy-card--cost">
          <p className="font-bold text-xl">{props.totalCost()} руб.</p>
        </div>
      )}
      {props.hasWeight && (
        <WeightComponent
          id={props.item.product_id as number}
          selectedWeight={props.selectedWeight}
          weightHandler={weightHandler}
        />
      )}
      <div className="home-buy-card--actions flex justify-between">
        <button
          className="w-fit text-lg text-white px-8 py-2 rounded-md bg-mgreen transition-colors hover:bg-mstronggreen active:bg-mgreen"
          onClick={(e) => redirectToCard(props.item.product_id as number)}
        >
          Подробнее
        </button>
        {props.isSell && (
          <button
            className="w-fit text-lg text-white py-1.5 px-2 rounded-md bg-white border border-gray-200 transition-colors hover:bg-gray-100 active:bg-gray-200"
            onClick={createCartElement}
          >
            <ShoppingCartOutlined className="h-7 w-7 text-micon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default BuyCardItemComponent;
