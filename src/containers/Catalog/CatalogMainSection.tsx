import React, { useEffect, useState } from "react";

import MixComponent from "../../components/CatalogComponents/MixComponents/MixComponent";
import { ISeedsItem } from "../../interfaces";
import useQuery from "../../utils/useQuery";

import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions/breadCrumbs.actions";
import { IRootReducer } from "../../redux";
import fetchProducts from "../../utils/Api/fetchProducts";
import { ICatalogItem, IPaginationProducts, IProductItem } from "../../interfaces/api";
import { AxiosResponse } from "axios";
import { getCategoriesRedux } from "../../redux/selectors/apiCategory.selectors";

interface Props {
  pageName: string;
  pathName: string;
  hasWeight?: boolean;
  isSell?: boolean;
  getPagesCount: (pages: number) => void;
}

const CatalogMainSection = (props: Props) => {
  const [selectedProduct, setSelectedProduct] = useState<IProductItem>();
  const [birdsThings, setBirdsThings] = useState<IProductItem[] | null>(null);
  const catalogs = useSelector<IRootReducer, ICatalogItem[] | null>(getCategoriesRedux);

  const query = useQuery();
  const dispatch = useDispatch();

  const fetchingProductsInfo = () => {
    const queryId = query.get("id");
    const page = query.get("page");

    if (queryId) {
      fetchProducts.getProductById(queryId).then((resp: AxiosResponse<IProductItem>) => {
        setSelectedProduct(resp.data);
        dispatch(actions.setBreadCrumbs(2, resp.data.name));
        setBirdsThings(null);
      });
      return;
    }

    let selectedCatalog = catalogs?.find((item) => item.category == props.pageName);

    if (!selectedCatalog || !page) {
      return;
    }

    fetchProducts
      .getPaginationProducts(selectedCatalog.category_id, page)
      .then((resp: AxiosResponse<IPaginationProducts>) => {
        props.getPagesCount(resp.data.pages);
        setBirdsThings(resp.data.products);
        setSelectedProduct(undefined);
      });
  };

  useEffect(() => {
    dispatch(actions.setBreadCrumbs(1, props.pageName));
    fetchingProductsInfo();
  }, [query.get("id"), props.pathName, catalogs]);
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
