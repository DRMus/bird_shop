import React, { useContext, useEffect, useState } from "react";
import HomePageComponent from "../../components/HomeComponents/HomePageComponent";

import { IBirdType, ICatalogItemOld } from "../../interfaces";

import birdPNG from "../../img/png/bird.png";
import seedsPNG from "../../img/png/seeds.png";
import dirdsNseedsPNG from "../../img/png/birds_seeds.png";
import birdPhotoPNG from "../../img/png/bird_photo.png";
import fetchProducts from "../../utils/Api/fetchProducts";
import { IProductItem } from "../../interfaces/api";
import { PopUpContextValues } from "../../context/PopUpContext";
import { AxiosError } from "axios";

const catalogItems: ICatalogItemOld[] = [
  {
    id: 1,
    image: birdPNG,
    firstDescription: "Кормушки",
  },
  {
    id: 2,
    image: seedsPNG,
    firstDescription: "Готовые миксы",
    secondDescription: "смеси кормов",
  },
  {
    id: 3,
    image: dirdsNseedsPNG,
    firstDescription: "Отдельные виды кормов",
    secondDescription: "зерен",
  },
];

const birdsItem: IBirdType[] = [
  {
    id: 1,
    image: birdPhotoPNG,
    name: "Домовый воробей",
    category: "68",
  },
  {
    id: 2,
    image: birdPhotoPNG,
    name: "Домовый воробей",
    category: "68",
  },
  {
    id: 3,
    image: birdPhotoPNG,
    name: "Домовый воробей",
    category: "68",
  },
  {
    id: 4,
    image: birdPhotoPNG,
    name: "Домовый воробей",
    category: "68",
  },
];

const HomePage = () => {
  const { addPopUp } = useContext(PopUpContextValues);
  const [seedsItems, setSeedsItems] = useState<IProductItem[] | null>(null);
  const [feederItems, setFeederItems] = useState<IProductItem[] | null>(null);

  useEffect(() => {
    fetchProducts
      .getLimitedProducts(4, 4)
      .then((resp) => {
        setSeedsItems(resp.data);
      })
      .catch((err: AxiosError) => {
        if (err.code === "ERR_NETWORK") {
          addPopUp("error", "Сервер недоступен");
        }
      });
    fetchProducts
      .getLimitedProducts(5, 4)
      .then((resp) => {
        setFeederItems(resp.data);
      })
      .catch((err: AxiosError) => {
        if (err.code === "ERR_NETWORK") {
          addPopUp("error", "Сервер недоступен");
        }
      });
  }, []);
  return (
    <HomePageComponent
      catalogItems={catalogItems}
      birdsItem={birdsItem}
      seedsItems={seedsItems}
      feederItems={feederItems}
    />
  );
};

export default HomePage;
