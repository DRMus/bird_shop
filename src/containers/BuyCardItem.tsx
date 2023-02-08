import React, { useState } from "react";
import BuyCardItemComponent from "../components/HomeComponents/MainSectionComponents/BuyCardItemComponent";
import { ISeedsItem } from "../interfaces";

interface Props {
  item: any;
  hasWeight: boolean;
  isSell: boolean;
}

const BuyCardItem = (props: Props) => {
  const [selectedWeight, setSelectedWeight] = useState<number>(200);

  const weightHandler = (weight: number) => {
    setSelectedWeight(weight);
  };

  return (
    <BuyCardItemComponent
    item={props.item}
      weightHandler={weightHandler}
      selectedWeight={selectedWeight}
      hasWeight={props.hasWeight}
      isSell={props.isSell}
    />
  );
};

export default BuyCardItem;
