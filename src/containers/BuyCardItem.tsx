import React, { useState } from "react";
import { useNavigate } from "react-router";
import BuyCardItemComponent from "../components/HomeComponents/MainSectionComponents/BuyCardItemComponent";

interface Props {
  item: any;
  pathname: string;
  hasWeight: boolean;
  isSell: boolean;
}

const BuyCardItem = (props: Props) => {
  const [selectedWeight, setSelectedWeight] = useState<number>(200);

  const navigateTo = useNavigate();

  const weightHandler = (weight: number) => {
    setSelectedWeight(weight);
  };

  const redirectToCard = (id: string | number) => {
    navigateTo(`/catalog/${props.pathname}?id=${id}`)
  }

  return (
    <BuyCardItemComponent
      item={props.item}
      weightHandler={weightHandler}
      redirectToCard={redirectToCard}
      selectedWeight={selectedWeight}
      hasWeight={props.hasWeight}
      isSell={props.isSell}
    />
  );
};

export default BuyCardItem;
