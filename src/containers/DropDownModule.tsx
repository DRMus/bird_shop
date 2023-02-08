import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router";
import DropDownModuleComponent from "../components/HomeComponents/HeaderComponents/DropDownModuleComponent";
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
    page: "#",
  },
  {
    name: "Готовые комплекты",
    page: "#",
  },
  {
    name: "Aксессуары и другое",
    page: "#",
  },
];

interface Props {
  startPage: string;
}

const DropDownModule = (props: Props) => {
  const { showDropDown } = useContext(ShopMenuContext);

  const [moduleTagsState, setModuleTagsState] = useState<IShopItemTag[]>(moduleTags);

  const navigationTo = useNavigate();
  const dropDownRef = useRef<HTMLDivElement>(null);

  useOutsideAlerter(dropDownRef, showDropDown);

  const redirectToPage = (path: string) => {
    setModuleTagsState((prev) => {
      prev = prev.map((item) => {
        item.page === path ? (item.active = true) : (item.active = false);
        return item;
      });
      return prev;
    });
    navigationTo(`${props.startPage}/${path}`);
  };
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
