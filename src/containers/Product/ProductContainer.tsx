import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "../../components/CatalogComponents/MixComponents/ProductComponent";
import { ICartItem } from "../../interfaces";
import { IProductItem } from "../../interfaces/api";
import { addToCart } from "../../utils/cartOperations";

interface Props {
  product: IProductItem;
  hasWeight: boolean;
}

const ProductContainer = (props: Props) => {
  const [selectedWeight, setSelectedWeight] = useState<number>(200);
  const [selectedCount, setSelectedCount] = useState<number>(1);

  const dispatch = useDispatch()

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

  const totalCost = () => {
    if (props.hasWeight) {
      return (props.product.cost * selectedCount * (selectedWeight / 1000)).toFixed(1);
    }
    return (props.product.cost * selectedCount).toFixed(1);
  };

  const createCartElement = () => {
    let cartElement: ICartItem = {
      product: props.product,
      weight: props.hasWeight ? selectedWeight : undefined,
      count: selectedCount,
      total_cost: Number.parseFloat(totalCost()),
    };

    addToCart(cartElement, dispatch);
  };

  const buyProduct = () => {};
  return (
    <ProductComponent
      product={props.product}
      hasWeight={props.hasWeight}
      selectedWeight={props.hasWeight ? selectedWeight : 1000}
      selectedCount={selectedCount}
      weightHandler={weightHandler}
      changeCount={changeCount}
      onClickAdd={() => createCartElement()}
      onClickBuy={() => buyProduct()}
    />
  );
};

export default ProductContainer;
