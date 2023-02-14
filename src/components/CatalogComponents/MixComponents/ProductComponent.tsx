import React, { useState } from "react";
import { ISeedsItem } from "../../../interfaces";
import WeightComponent from "../../HomeComponents/MainSectionComponents/WeightComponent";

interface Props {
  product: ISeedsItem;
}

const ProductComponent = (props: Props) => {
  const [selectedWeight, setSelectedWeight] = useState<number>(200);
  const [selectedCount, setSelectedCount] = useState<number>(1);

  const weightHandler = (weight: number) => {
    setSelectedWeight(weight);
  };

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
          <WeightComponent
            id={props.product.id}
            selectedWeight={selectedWeight}
            weightHandler={weightHandler}
            largeFont
          />
          <div className="product-section--cost text-4xl">
            <p>{props.product.cost * (selectedWeight / 1000) * selectedCount} руб.</p>
          </div>

          <div className="product-section--counting flex flex-col gap-3">
            <p className="text-mshadowgray text-lg">Количество:</p>
            <div className="product-section--number flex items-center gap-5">
              <button
                className="product-section--decrement text-xl text-mgreen border border-mgreen rounded px-2"
                onClick={(e) => changeCount("-")}
              >
                -
              </button>
              <p className="product-section--count text-2xl">{selectedCount}</p>
              <button
                className="product-section--increment text-xl text-mgreen border border-mgreen rounded px-2"
                onClick={(e) => changeCount("+")}
              >
                +
              </button>
            </div>
          </div>
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
