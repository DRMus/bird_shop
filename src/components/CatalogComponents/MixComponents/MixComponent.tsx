import React from "react";
import BuyCardItem from "../../../containers/BuyCardItem";
import { ISeedsItem } from "../../../interfaces";

interface Props {
  seedsItems: ISeedsItem[];
}

const MixComponent = (props: Props) => {
  return (
    <>
      {props.seedsItems.map((item, index) => (
        <BuyCardItem hasWeight isSell item={item} key={index} />
      ))}
    </>
  );
};

export default MixComponent;
