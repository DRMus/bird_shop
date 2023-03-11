import React, { useState } from "react";
import { useNavigate } from "react-router";
import BirdCardComponent from "../../components/TemplatesComponents/BirdCardComponent";
import { IBirdType } from "../../interfaces";
import { IProductItem } from "../../interfaces/api";

interface Props {
  item: IBirdType | IProductItem;
  pathname: string;
  hasWeight?: boolean;
  isSell?: boolean;
}

const BirdCard = (props: Props) => {
  const [selectedWeight, setSelectedWeight] = useState<number>(200);

  const redirectTo = useNavigate();

  const weightHandler = (weight: number) => {
    setSelectedWeight(weight);
  };

  const redirectToCard = (id: string | number) => {
    redirectTo(`/catalog/${props.pathname}?id=${id}`)
  }

  return (
    <BirdCardComponent
      item={props.item}
      weightHandler={weightHandler}
      redirectToCard={redirectToCard}
      selectedWeight={selectedWeight}
      hasWeight={props.hasWeight}
      isSell={props.isSell}
    />
  );
};

export default BirdCard;
