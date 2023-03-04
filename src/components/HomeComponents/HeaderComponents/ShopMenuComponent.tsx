import React from "react";
import ShopMenuItem from "../../../containers/Home/Header/ShopMenuItem";
import { IShopItem } from "../../../interfaces/shopMenu";

const menuItems: IShopItem[] = [
  {
    name: "Каталог",
    page: "catalog",
    isDropDown: true,
  },
  {
    name: "О проекте",
    page: "about",
    isDropDown: false,
  },
  {
    name: "Птицы",
    page: "birds",
    isDropDown: false,
  },
];

const ShopMenuComponent = () => {
  return (
    <div className="shop-menu flex grow gap-10">
      {menuItems.map((item, index) => (
        <ShopMenuItem key={index} item={item} />
      ))}
    </div>
  );
};

export default ShopMenuComponent;
