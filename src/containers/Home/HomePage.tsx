import React, { useEffect, useState } from "react";
import HomePageComponent from "../../components/HomeComponents/HomePageComponent";

import { IBirdType, ICatalogItemOld, IFeederType, ISeedsItem } from "../../interfaces";

import birdPNG from "../../img/png/bird.png";
import seedsPNG from "../../img/png/seeds.png";
import dirdsNseedsPNG from "../../img/png/birds_seeds.png";
import birdPhotoPNG from "../../img/png/bird_photo.png";
import getProducts from "../../utils/Api/fetchProducts";
import fetchProducts from "../../utils/Api/fetchProducts";

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
  const [seedsItems, setSeedsItems] = useState<ISeedsItem[]>([]);
  const [feederItems, setFeederItems] = useState<IFeederType[]>([]);
  useEffect(() => {
    fetchProducts.getLimitedProducts(4, 4).then((resp) => {
      setSeedsItems(resp.data);
    });
    fetchProducts.getLimitedProducts(5, 4).then((resp) => {
      setFeederItems(resp.data);
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
