interface IBuyCardDefaultItem {
  id: number;
  image: string;
}

export interface ICatalogItem extends IBuyCardDefaultItem {
  firstDescription: string;
  secondDescription?: string;
}

export interface ISeedsItem extends IBuyCardDefaultItem {
  name: string;
  category: string;
  type: string;
  cost: number;
}

export interface IBirdType extends IBuyCardDefaultItem {
  name: string;
  category: string;
}

export interface IFeederType extends IBuyCardDefaultItem {
  name: string;
  category: string;
  type: string;
  cost: number;
}

export interface IBreadCrumb {
  crumb: string;
  page: string;
}
