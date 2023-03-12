import { ICartItem } from ".";

export interface IUserInfo {
  id?: number;
  fullname?: string | null;
  address?: string | null;
  email?: string | null;
  phone_number?: string;
  password?: string;
}

export type ISignUpErrors = { errors: ["email" | null, "phoneNumber" | null] };

export interface IErrorsRender {
  [key: string]: string | undefined;
}

export interface ICatalogItem {
  category_id: number;
  category: string;
  has_weight: boolean;
}

export interface IProductItem {
  product_id?: number,
  category_id: number,
  name: string,
  second_name?: string,
  description?: string,
  cost: number,
  image: string
}

export interface IPaginationProducts {
  pages: number;
  products: IProductItem[]
}

export interface IOrderItem {
  order_id?: number;
  user_id: number;
  state?: number;
  delivery_date: Date | string;
  sum_cost: number | string;
  User: null;
  orderProducts: ICartItem[];
}
  
