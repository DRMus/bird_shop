import React from "react";
import BuyCardItem from "../../../containers/Templates/BuyCardItem";
import ProductContainer from "../../../containers/Product/ProductContainer";
import { ISeedsItem } from "../../../interfaces";
import { IProductItem } from "../../../interfaces/api";
import EmptyList from "../../TemplatesComponents/EmptyList";
import SpinnerComponent from "../../TemplatesComponents/SpinnerComponent";

interface Props {
  birdsThings: IProductItem[] | null;
  pathname: string;
  hasWeight: boolean;
  isSell: boolean;
  product?: IProductItem;
}

const MixComponent = (props: Props) => {
  return (
    <>
      {props.product ? (
        <ProductContainer product={props.product} hasWeight={props.hasWeight} />
      ) : props.birdsThings ? (
        props.birdsThings.length ? (
          props.birdsThings.map((item, index) => (
            <BuyCardItem
              pathname={props.pathname}
              hasWeight={props.hasWeight}
              isSell={props.isSell}
              item={item}
              key={index}
            />
          ))
        ) : (
          <EmptyList width="full" height="[350px]" descrip="Список пуст" />
        )
      ) : (
        <SpinnerComponent fontSize={72} className="w-mscreen h-72" />
      )}
    </>
  );
};

export default MixComponent;
