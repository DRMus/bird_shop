import React from "react";
import BuyCardItem from "../../../containers/BuyCardItem";
import ProductContainer from "../../../containers/ProductContainer";
import { ISeedsItem } from "../../../interfaces";

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
        <ProductContainer product={props.product} hasWeight={props.hasWeight}/>
      ) : (
        props.birdsThings.map((item, index) => (
          <BuyCardItem pathname={props.pathname} hasWeight={props.hasWeight} isSell={props.isSell} item={item} key={index} />
        ))
      )}
    </>
  );
};

export default MixComponent;
