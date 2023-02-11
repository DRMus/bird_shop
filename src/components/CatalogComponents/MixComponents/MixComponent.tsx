import React from "react";
import BuyCardItem from "../../../containers/BuyCardItem";
import { ISeedsItem } from "../../../interfaces";
import ProductComponent from "./ProductComponent";

interface Props {
  birdsThings: ISeedsItem[];
  pathname: string;
  hasWeight: boolean;
  isSell: boolean;
  product?: ISeedsItem;
}

const MixComponent = (props: Props) => {
  return (
    <>
      {props.product ? (
        <ProductComponent product={props.product}/>
      ) : (
        props.birdsThings.map((item, index) => (
          <BuyCardItem pathname={props.pathname} hasWeight={props.hasWeight} isSell={props.isSell} item={item} key={index} />
        ))
      )}
    </>
  );
};

export default MixComponent;
