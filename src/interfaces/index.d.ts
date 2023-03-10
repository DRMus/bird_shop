interface IBuyCardDefaultItem {
  id: number;
  image: string;
}

export interface ICatalogItemOld extends IBuyCardDefaultItem {
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

export interface IFeederType extends ISeedsItem {
  
}

export interface IBreadCrumb {
  crumb: string;
  page: string;
}
