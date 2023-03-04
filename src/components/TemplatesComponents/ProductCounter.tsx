import React from "react";

interface Props {
  selectedCount: number
  changeCount: (operation: "-" | "+") => void;
}

const ProductCounter = ({changeCount, ...props}: Props) => {
  return (
    <div className="product-section--counting flex flex-col gap-3">
      <p className="text-mshadowgray text-lg">Количество:</p>
      <div className="product-section--number flex items-center gap-5">
        <button
          className="product-section--decrement text-xl text-mgreen border border-mgreen rounded px-2"
          onClick={(e) => changeCount("-")}
        >
          -
        </button>
        <p className="product-section--count text-2xl">{props.selectedCount}</p>
        <button
          className="product-section--increment text-xl text-mgreen border border-mgreen rounded px-2"
          onClick={(e) => changeCount("+")}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCounter;
