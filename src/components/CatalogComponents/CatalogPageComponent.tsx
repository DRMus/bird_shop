import React from "react";
import { arrowDownSVG } from "../../img/svg/arrowDown";
import { IBreadCrumb, IFeederType, ISeedsItem } from "../../interfaces";

import BuyCardItem from "../../containers/BuyCardItem";
import testProduct from "../../img/png/testProduct.png";
import feederPhotoPNG from "../../img/png/feeder_photo.png";

import MixComponent from "./MixComponents/MixComponent";
import { Route, Routes } from "react-router";
import BreadCrumbsComponent from "./BreadCrumbsComponent";
import PaginationComponent from "./PaginationComponent";
import CatalogMainSection from "../../containers/CatalogMainSection";

const bread: IBreadCrumb[] = [
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
    type: "Готовые миксы",
    cost: 1000,
  },
  {
    id: 2,
    image: testProduct,
    name: "PADOVAN OVOMIX GOLD ROSSO",
    category: "Корм для птиц",
    type: "Готовые миксы",
    cost: 1000,
  },
  {
    id: 3,
    image: testProduct,
    name: "PADOVAN OVOMIX GOLD ROSSO",
    category: "Корм для птиц",
    type: "Готовые миксы",
    cost: 1000,
  },
  {
    id: 4,
    image: testProduct,
    name: "PADOVAN OVOMIX GOLD ROSSO",
    category: "Корм для птиц",
    type: "Готовые миксы",
    cost: 1000,
  },
  {
    id: 4,
    image: testProduct,
    name: "PADOVAN OVOMIX GOLD ROSSO",
    category: "Корм для птиц",
    type: "Готовые миксы",
    cost: 1000,
  },
  {
    id: 4,
    image: testProduct,
    name: "PADOVAN OVOMIX GOLD ROSSO",
    category: "Корм для птиц",
    type: "Готовые миксы",
    cost: 1000,
  },
  {
    id: 4,
    image: testProduct,
    name: "PADOVAN OVOMIX GOLD ROSSO",
    category: "Корм для птиц",
    type: "Готовые миксы",
    cost: 1000,
  },
  {
    id: 4,
    image: testProduct,
    name: "PADOVAN OVOMIX GOLD ROSSO",
    category: "Корм для птиц",
    type: "Готовые миксы",
    cost: 1000,
  },
];

const feederItems: IFeederType[] = [
  {
    id: 1,
    image: feederPhotoPNG,
    cost: 1000,
    name: `Комплект-агро "Избушка на курьих ножках"`,
    category: "Кормушка малая",
    type: "Кормушка",
  },
  {
    id: 2,
    image: feederPhotoPNG,
    cost: 1000,
    name: `Комплект-агро "Избушка на курьих ножках"`,
    category: "Кормушка малая",
    type: "Кормушка",
  },
  {
    id: 3,
    image: feederPhotoPNG,
    cost: 1000,
    name: `Комплект-агро "Избушка на курьих ножках"`,
    category: "Кормушка малая",
    type: "Кормушка",
  },
  {
    id: 4,
    image: feederPhotoPNG,
    cost: 1000,
    name: `Комплект-агро "Избушка на курьих ножках"`,
    category: "Кормушка малая",
    type: "Кормушка",
  },
];

const CatalogPageComponent = () => {
  return (
    <div className="home-sections w-mscreen flex flex-col gap-6 py-20 text-micon">
      <div className="bread-crumbs flex gap-3.5">
        <BreadCrumbsComponent />
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
            <Route path="mix" element={<CatalogMainSection pageName={"Готовые миксы"} birdsThings={seedsItems} isSell hasWeight/>} />
            <Route path="feeders" element={<CatalogMainSection pageName={"Кормушки"} birdsThings={feederItems} isSell/>} />
          </Routes>
        </div>
        <div className="catalog--main-section--pagination flex w-full items-center justify-center ">
          <PaginationComponent/>
        </div>
      </div>
    </div>
  );
};

export default CatalogPageComponent;
