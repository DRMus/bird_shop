import React, { useContext, useEffect } from "react";
import MixComponent from "../components/CatalogComponents/MixComponents/MixComponent";
import { GlobalContextValue } from "../context/GlobalContext";
import { ISeedsItem } from "../interfaces";

interface Props {
  birdsThings: ISeedsItem[];
  pageName: string;
  hasWeight?: boolean;
  isSell?: boolean;
}

const CatalogMainSection = (props: Props) => {
  const {changeBreadCrumbs} = useContext(GlobalContextValue)
  useEffect(() => {
    changeBreadCrumbs(props.pageName, 1);
  }, [])
  return (
    <MixComponent
      hasWeight={props.hasWeight || false}
      isSell={props.isSell || false}
      birdsThings={props.birdsThings}
    />
  );
};

export default CatalogMainSection;
