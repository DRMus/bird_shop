import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import BuyCardItemComponent from "../../components/TemplatesComponents/BuyCardItemComponent";
import { ICartItem } from "../../interfaces";
import { IProductItem } from "../../interfaces/api";
import { addToCart } from "../../utils/cartOperations";

interface Props {
  item: IProductItem;
  pathname: string;
  hasWeight?: boolean;
  isSell?: boolean;
}

const BuyCardItem = (props: Props) => {
  const [selectedWeight, setSelectedWeight] = useState<number>(200);

  const redirectTo = useNavigate();
  const dispatch = useDispatch();

  const weightHandler = (weight: number) => {
    setSelectedWeight(weight);
  };

  const redirectToCard = (id: string | number) => {
    redirectTo(`/catalog/${props.pathname}?id=${id}`)
  }

  const totalCost = () => {
    if (props.hasWeight) {
      return (props.item.cost * (selectedWeight / 1000)).toFixed(1);
    }
    return (props.item.cost).toFixed(1);
  };

  const createCartElement = () => {
    let cartElement: ICartItem = {
      product: props.item,
      weight: props.hasWeight ? selectedWeight : undefined,
      count: 1,
      total_cost: Number.parseFloat(totalCost()),
    };

    addToCart(cartElement, dispatch);
  };

  return (
    <BuyCardItemComponent
      item={props.item}
      weightHandler={weightHandler}
      redirectToCard={redirectToCard}
      totalCost={totalCost}
      createCartElement={createCartElement}
      selectedWeight={props.hasWeight ? selectedWeight : 1000}
      hasWeight={props.hasWeight}
      isSell={props.isSell}
    />
  );
};

export default BuyCardItem;
