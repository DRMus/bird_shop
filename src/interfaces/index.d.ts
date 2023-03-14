import { IProductItem } from "./api";

interface IBuyCardDefaultItem {
  id: number;
  image: string;
}

export interface ICatalogItemOld extends IBuyCardDefaultItem {
  firstDescription: string;
  secondDescription?: string;
}

export interface IBirdType extends IBuyCardDefaultItem {
  name: string;
  category: string;
}

export interface IBreadCrumb {
  crumb: string;
  page: string;
}

export interface ICartItem {
  product: IProductItem;
  total_cost: number;
  weight?: number;
  count: number;
}

export interface IPopUp {
  type: "error" | "done",
  message: string
}
