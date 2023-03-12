import React from "react";

import MainSectionComponent from "../TemplatesComponents/MainSectionComponents/MainSectionComponent";
import CatalogItem from "../TemplatesComponents/MainSectionComponents/CatalogItem";
import BuyCardItem from "../../containers/Templates/BuyCardItem";

import { IBirdType, ICatalogItemOld } from "../../interfaces";
import SpinnerComponent from "../TemplatesComponents/SpinnerComponent";
import { IProductItem } from "../../interfaces/api";
import { Empty } from "antd";
import EmptyList from "../TemplatesComponents/EmptyList";

interface Props {
  catalogItems: ICatalogItemOld[];
  seedsItems: IProductItem[] | null;
  birdsItem: IBirdType[];
  feederItems: IProductItem[] | null;
}

const HomePageComponent = (props: Props) => {
  return (
    <div className="home-sections w-mscreen flex flex-col gap-20 py-20">
      <MainSectionComponent header="Каталог">
        {props.catalogItems.length ? (
          props.catalogItems.map((item, index) => <CatalogItem key={index} item={item} />)
        ) : (
          <SpinnerComponent fontSize={72} className="w-mscreen h-72" />
        )}
      </MainSectionComponent>
      <MainSectionComponent header="Готовые миксы">
        {props.seedsItems ? (
          props.seedsItems.length ? (
            props.seedsItems.map((item, index) => (
              <BuyCardItem pathname={"mix"} key={index} item={item} hasWeight isSell />
            ))
          ) : (
            <EmptyList width="full" height="[300px]" descrip="Список пуст"/>
          )
        ) : (
          <SpinnerComponent fontSize={72} className="w-mscreen h-72" />
        )}
      </MainSectionComponent>
      {/* <MainSectionComponent header="Виды птиц">
        {props.birdsItem.length ? props.birdsItem.map((item, index) => (
          <BuyCardItem pathname={"birds"} key={index} item={item} hasWeight={false} isSell={false} />
        )): <SpinnerComponent fontSize={72} className="w-mscreen h-72"/>}
      </MainSectionComponent> */}
      <MainSectionComponent header="Кормушки">
        {props.feederItems ? (
          props.feederItems.length ? (
            props.feederItems.map((item, index) => (
              <BuyCardItem pathname={"feeders"} key={index} item={item} isSell />
            ))
          ) : (
            <EmptyList width="full" height="[300px]" descrip="Список пуст"/>
          )
        ) : (
          <SpinnerComponent fontSize={72} className="w-mscreen h-72" />
        )}
      </MainSectionComponent>
    </div>
  );
};

export default HomePageComponent;
