import React from "react";
import { arrowDownSVG } from "../../img/svg/arrowDown";
import { ISeedsItem } from "../../interfaces";

import BuyCardItem from "../../containers/BuyCardItem";
import testProduct from "../../img/png/testProduct.png";
import MixComponent from "./MixComponents/MixComponent";
import { Route, Routes } from "react-router";

const bread = [
  {
    crumb: "Каталог",
    page: "catalog",
  },
  {
    crumb: "Готовые миксы",
    page: "mix",
  },
];
const seedsItems: ISeedsItem[] = [
  {
    id: 1,
    image: testProduct,
    name: "PADOVAN OVOMIX GOLD ROSSO",
    category: "Корм для птиц",
    cost: 1000,
  },
  {
    id: 2,
    image: testProduct,
    name: "PADOVAN OVOMIX GOLD ROSSO",
    category: "Корм для птиц",
    cost: 1000,
  },
  {
    id: 3,
    image: testProduct,
    name: "PADOVAN OVOMIX GOLD ROSSO",
    category: "Корм для птиц",
    cost: 1000,
  },
  {
    id: 4,
    image: testProduct,
    name: "PADOVAN OVOMIX GOLD ROSSO",
    category: "Корм для птиц",
    cost: 1000,
  },
  {
    id: 4,
    image: testProduct,
    name: "PADOVAN OVOMIX GOLD ROSSO",
    category: "Корм для птиц",
    cost: 1000,
  },
  {
    id: 4,
    image: testProduct,
    name: "PADOVAN OVOMIX GOLD ROSSO",
    category: "Корм для птиц",
    cost: 1000,
  },
  {
    id: 4,
    image: testProduct,
    name: "PADOVAN OVOMIX GOLD ROSSO",
    category: "Корм для птиц",
    cost: 1000,
  },
  {
    id: 4,
    image: testProduct,
    name: "PADOVAN OVOMIX GOLD ROSSO",
    category: "Корм для птиц",
    cost: 1000,
  },
];

const CatalogPageComponent = () => {
  return (
    <div className="home-sections w-mscreen flex flex-col gap-6 py-20 text-micon">
      <div className="bread-crumbs flex gap-3.5">
        {bread.map((item, index) => (
          <div className="bread-crumbs--item flex gap-3.5 items-center" key={index}>
            <p className="bread-crumbs--name text-lg text-mshadowgray">{item.crumb}</p>
            {index !== bread.length - 1 && (
              <div className="bread-crumbs--separator w-1.5 h-1.5 rounded-full bg-mshadowgray"></div>
            )}
          </div>
        ))}
      </div>
      <div className="catalog--main-section flex flex-col gap-9">
        <div className="catalog--main-section--back flex h-fit w-fit items-center gap-1 cursor-pointer">
          <span className="arrow-down transition-transform duration-277 rotate-90 fill-mgreen">
            {arrowDownSVG}
          </span>
          <p className="text-xl">Назад</p>
        </div>
        <div className="catalog--main-section--content flex flex-wrap w-full gap-x-4 gap-y-9">
          <Routes>
            <Route path="mix" element={<MixComponent seedsItems={seedsItems} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default CatalogPageComponent;
