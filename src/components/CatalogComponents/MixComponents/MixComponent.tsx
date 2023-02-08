import React from "react";
import BuyCardItem from "../../../containers/BuyCardItem";
import { ISeedsItem } from "../../../interfaces";

interface Props {
  birdsThings: ISeedsItem[];
  hasWeight: boolean;
  isSell: boolean;
}

const MixComponent = (props: Props) => {
  return (
    <>
      {props.birdsThings.map((item, index) => (
        <BuyCardItem
          hasWeight={props.hasWeight}
          isSell={props.isSell}
          item={item}
          key={index}
        />
      ))}
    </>
  );
};

export default MixComponent;
