import React, { useState } from "react";
import { ISeedsItem } from "../../../interfaces";
import WeightComponent from "../../HomeComponents/MainSectionComponents/WeightComponent";
import ProductCounter from "./ProductCounter";

interface Props {
  product: ISeedsItem;
  hasWeight: boolean;
  selectedWeight: number;
  selectedCount: number;
  weightHandler: (weight: number) => void;
  changeCount: (operation: "-" | "+") => void;
}

const ProductComponent = ({ weightHandler, changeCount, ...props }: Props) => {
  return (
    <div className="product-section w-full flex">
      <div className="product-section--image w-[45%] h-[560px]">
        <img src={`${props.product.image}`} alt="Птички" className="h-full" />
      </div>
      <div className="product-section--info w-[55%] overflow-hidden flex flex-col gap-7 p-1">
        <div className="product-section--desc flex flex-col gap-5 h-64">
          <p className="product-section--header text-bold text-4xl w-1/2">{props.product.name}</p>
          <p className="text-base w-4/5 whitespace-pre-line">
            Дополнительный пюреобразный пигментирующий корм, для птенцов с красным оперением.
            Отлично подходит для увеличения поступления питательных веществ на особенных этапах
            жизни зерноядных птиц (при линьке и размножении), а также в периоды, когда животное
            испытывает стресс.
          </p>
        </div>
        <div className="product-section--pay w-[45%] flex flex-col gap-7">
          {props.hasWeight && (
            <WeightComponent
              id={props.product.id}
              selectedWeight={props.selectedWeight}
              weightHandler={weightHandler}
              largeFont
            />
          )}
          <div className="product-section--cost text-4xl">
            <p>{props.product.cost * props.selectedCount * (props.selectedWeight / 1000)} руб.</p>
          </div>
          <ProductCounter changeCount={changeCount} selectedCount={props.selectedCount} />
        </div>
        <div className="product-section--buy flex gap-5">
          <button className="w-fit text-lg text-white px-8 py-2 rounded-md bg-mgreen transition-colors hover:bg-mstronggreen active:bg-mgreen">
            Купить
          </button>
          <button className="w-fit text-lg text-mgreen px-8 py-2 rounded-md border border-mgreen transition-colors">
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
