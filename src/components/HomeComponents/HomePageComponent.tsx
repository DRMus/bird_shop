import React from "react";

import MainSectionComponent from "./MainSectionComponents/MainSectionComponent";
import CatalogItem from "./MainSectionComponents/CatalogItem";
import BuyCardItem from "../../containers/Templates/BuyCardItem";

import { IBirdType, ICatalogItem, IFeederType, ISeedsItem } from "../../interfaces";


interface Props {
  catalogItems: ICatalogItem[];
  seedsItems: ISeedsItem[];
  birdsItem: IBirdType[];
  feederItems: IFeederType[];
}

const HomePageComponent = (props: Props) => {
  return (
    <div className="home-sections w-mscreen flex flex-col gap-20 py-20">
      <MainSectionComponent header="Каталог">
        {props.catalogItems.map((item, index) => (
          <CatalogItem key={index} item={item} />
        ))}
      </MainSectionComponent>
      <MainSectionComponent header="Готовые миксы">
        {props.seedsItems.map((item, index) => (
          <BuyCardItem pathname={"mix"} key={index} item={item} hasWeight={true} isSell={true} />
        ))}
      </MainSectionComponent>
      <MainSectionComponent header="Виды птиц">
        {props.birdsItem.map((item, index) => (
          <BuyCardItem pathname={"birds"} key={index} item={item} hasWeight={false} isSell={false} />
        ))}
      </MainSectionComponent>
      <MainSectionComponent header="Кормушки">
        {props.feederItems.map((item, index) => (
          <BuyCardItem pathname={"feeders"} key={index} item={item} hasWeight={false} isSell={true} />
        ))}
      </MainSectionComponent>
    </div>
  );
};

export default HomePageComponent;
