import React, { useState } from "react";
import ProductComponent from "../components/CatalogComponents/MixComponents/ProductComponent";
import { ISeedsItem } from "../interfaces";

interface Props {
  product: ISeedsItem;
  hasWeight: boolean;
}

const ProductContainer = (props: Props) => {
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
    <ProductComponent
      product={props.product}
      hasWeight={props.hasWeight}
      selectedWeight={props.hasWeight ? selectedWeight : 1000}
      selectedCount={selectedCount}
      weightHandler={weightHandler}
      changeCount={changeCount}
    />
  );
};

export default ProductContainer;
