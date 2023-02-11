import React, { useState } from "react";
import { ISeedsItem } from "../../../interfaces";
import WeightComponent from "../../HomeComponents/MainSectionComponents/WeightComponent";

interface Props {
  product: ISeedsItem;
}

const ProductComponent = (props: Props) => {
  const [selectedWeight, setSelectedWeight] = useState<number>(200);

  const weightHandler = (weight: number) => {
    setSelectedWeight(weight);
  };

  return (
    <div className="product-section w-full flex">
      <div className="product-section--image w-[45%] h-[560px]">
        <img src={`${props.product.image}`} alt="Птички" className="h-full" />
      </div>
      <div className="product-section--info w-[55%] overflow-hidden flex flex-col gap-20 p-1">
        <div className="product-section--desc flex flex-col gap-5">
          <p className="product-section--header text-bold text-4xl w-1/2">{props.product.name}</p>
          <p className="text-base w-4/5 whitespace-pre-line">
            Дополнительный пюреобразный пигментирующий корм, для птенцов с красным оперением.
            Отлично подходит для увеличения поступления питательных веществ на особенных этапах
            жизни зерноядных птиц (при линьке и размножении), а также в периоды, когда животное
            испытывает стресс.
          </p>
        </div>
        <div className="product-section--pay w-[45%]">
          <WeightComponent
            id={props.product.id}
            selectedWeight={selectedWeight}
            weightHandler={weightHandler}
            largeFont
          />
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
