import { ICatalogItem } from "./api";

interface IShopDefaultItem {
  name: string;
  page: string;
}

export interface IShopItem extends IShopDefaultItem {
  isDropDown: boolean;
}

export interface IShopItemTag extends ICatalogItem {
  page: string;
  active?: boolean;
}
