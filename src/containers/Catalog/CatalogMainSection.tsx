import React, { useEffect, useState } from "react";

import MixComponent from "../../components/CatalogComponents/MixComponents/MixComponent";
import { ISeedsItem } from "../../interfaces";
import useQuery from "../../utils/useQuery";

import getProducts from "../../utils/Api/fetchProducts";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions/breadCrumbs.actions";
import { IRootReducer } from "../../redux";
import fetchProducts from "../../utils/Api/fetchProducts";

interface Props {
  pageName: string;
  pathName: string;
  hasWeight?: boolean;
  isSell?: boolean;
}

const CatalogMainSection = (props: Props) => {
  const query = useQuery();
  const dispatch = useDispatch()
  
  const [selectedProduct, setSelectedProduct] = useState<ISeedsItem>();
  const [birdsThings, setBirdsThings] = useState<ISeedsItem[]>([]);

  useEffect(() => {
    dispatch(actions.setBreadCrumbs(1, props.pageName))
    const queryId = query.get("id");

    if (queryId) {
      fetchProducts.getProductById(queryId).then((resp) => {
        setSelectedProduct(resp.data[0]);
        dispatch(actions.setBreadCrumbs(2, resp.data[0].name))
        setBirdsThings([]);
      });
    } else {
      // getProducts(props.pathName).then((resp) => {
      //   setBirdsThings(resp.data);
      //   setSelectedProduct(undefined);
      // });
    }
  }, [query.get("id"), props.pathName]);
  return (
    <MixComponent
      pathname={props.pathName}
      hasWeight={props.hasWeight || false}
      isSell={props.isSell || false}
      birdsThings={birdsThings}
      product={selectedProduct}
    />
  );
};

export default CatalogMainSection;
