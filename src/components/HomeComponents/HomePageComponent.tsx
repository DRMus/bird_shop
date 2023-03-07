import React from "react";

import MainSectionComponent from "../TemplatesComponents/MainSectionComponents/MainSectionComponent";
import CatalogItem from "../TemplatesComponents/MainSectionComponents/CatalogItem";
import BuyCardItem from "../../containers/Templates/BuyCardItem";

import { IBirdType, ICatalogItem, IFeederType, ISeedsItem } from "../../interfaces";
import SpinnerComponent from "../TemplatesComponents/SpinnerComponent";


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
        {props.catalogItems.length ? props.catalogItems.map((item, index) => (
          <CatalogItem key={index} item={item} />
        )): <SpinnerComponent fontSize={72} className="w-mscreen h-72"/>}
      </MainSectionComponent>
      <MainSectionComponent header="Готовые миксы">
        {props.seedsItems.length ? props.seedsItems.map((item, index) => (
          <BuyCardItem pathname={"mix"} key={index} item={item} hasWeight={true} isSell={true} />
        )): <SpinnerComponent fontSize={72} className="w-mscreen h-72"/>}
      </MainSectionComponent>
      {/* <MainSectionComponent header="Виды птиц">
        {props.birdsItem.length ? props.birdsItem.map((item, index) => (
          <BuyCardItem pathname={"birds"} key={index} item={item} hasWeight={false} isSell={false} />
        )): <SpinnerComponent fontSize={72} className="w-mscreen h-72"/>}
      </MainSectionComponent> */}
      <MainSectionComponent header="Кормушки">
        {props.feederItems.length ? props.feederItems.map((item, index) => (
          <BuyCardItem pathname={"feeders"} key={index} item={item} hasWeight={false} isSell={true} />
        )): <SpinnerComponent fontSize={72} className="w-mscreen h-72"/>}
      </MainSectionComponent>
    </div>
  );
};

export default HomePageComponent;
