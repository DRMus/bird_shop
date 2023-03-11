import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import BuyCardItemComponent from "../../components/TemplatesComponents/BuyCardItemComponent";
import { IProductItem } from "../../interfaces/api";

interface Props {
  item: IProductItem;
  pathname: string;
  hasWeight?: boolean;
  isSell?: boolean;
}

const BuyCardItem = (props: Props) => {
  const [selectedWeight, setSelectedWeight] = useState<number>(200);

  const redirectTo = useNavigate();

  const weightHandler = (weight: number) => {
    setSelectedWeight(weight);
  };

  const redirectToCard = (id: string | number) => {
    redirectTo(`/catalog/${props.pathname}?id=${id}`)
  }

  return (
    <BuyCardItemComponent
      item={props.item}
      weightHandler={weightHandler}
      redirectToCard={redirectToCard}
      selectedWeight={props.hasWeight ? selectedWeight : 1000}
      hasWeight={props.hasWeight}
      isSell={props.isSell}
    />
  );
};

export default BuyCardItem;
