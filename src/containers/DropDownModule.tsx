import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import DropDownModuleComponent from "../components/HomeComponents/HeaderComponents/DropDownModuleComponent";
import { GlobalContextValue } from "../context/GlobalContext";
import ShopMenuContext from "../context/shopMenuContext";
import { IShopItemTag } from "../interfaces/shopMenu";
import useOutsideAlerter from "../utils/useOutsideAlerter";

const moduleTags: IShopItemTag[] = [
  {
    name: "Готовые миксы",
    page: "mix",
  },
  {
    name: "Отдельные виды кормов",
    page: "seeds",
  },
  {
    name: "Кормушки",
    page: "feeders",
  },
];

interface Props {
  startPage: string;
}

const DropDownModule = (props: Props) => {
  const { showDropDown } = useContext(ShopMenuContext);
  const { changeBreadCrumbs } = useContext(GlobalContextValue);

  const [moduleTagsState, setModuleTagsState] = useState<IShopItemTag[]>(moduleTags);

  const navigationTo = useNavigate();
  const dropDownRef = useRef<HTMLDivElement>(null);

  useOutsideAlerter(dropDownRef, showDropDown);

  const redirectToPage = (path: IShopItemTag) => {
    showDropDown(false);
    changeBreadCrumbs(path.name, 1);
    navigationTo(`${props.startPage}/${path.page}`);
  };

  useEffect(() => {
    setModuleTagsState((prev) => {
      prev = prev.map((item) => {
        window.location.pathname.includes(item.page) ? (item.active = true) : (item.active = false);
        return item;
      });
      return prev;
    });
  }, []);

  return (
    <DropDownModuleComponent
      startPage={props.startPage}
      moduleTags={moduleTagsState}
      dropDownRef={dropDownRef}
      redirectToPage={redirectToPage}
    />
  );
};

export default DropDownModule;
