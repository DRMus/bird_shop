import React from "react";
import HomePageComponent from "../components/HomeComponents/HomePageComponent";

import { IBirdType, ICatalogItem, ISeedsItem } from "../interfaces";

import birdPNG from "../img/png/bird.png";
import seedsPNG from "../img/png/seeds.png";
import dirdsNseedsPNG from "../img/png/birds_seeds.png";
import testProduct from "../img/png/testProduct.png";
import birdPhotoPNG from "../img/png/bird_photo.png";

const catalogItems: ICatalogItem[] = [
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
  return (
    <HomePageComponent catalogItems={catalogItems} birdsItem={birdsItem} seedsItems={seedsItems} />
  );
};

export default HomePage;
