interface IShopDefaultItem {
  name: string;
  page: string;
}

export interface IShopItem extends IShopDefaultItem {
  isDropDown: boolean;
}

export interface IShopItemTag extends IShopDefaultItem {}
