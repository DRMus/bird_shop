import { Dispatch } from "redux";
import { ICartItem } from "../interfaces";
import cartActions from "../redux/actions/cart.actions";
import isJson from "./isJson";

// ПОЛУЧЕНИЕ КОРЗИНЫ
const getCartFromLS = (): ICartItem[] | null => {
  let localCart = localStorage.getItem("user-cart");

  if (!localCart || !isJson(localCart)) {
    return null;
  }

  let localCartItems: ICartItem[] = JSON.parse(localCart);
  return localCartItems;
};

//ОБЩАЯ СТОИМОСТЬ
const totalCost = (cost: number, count: number, weight?: number) => {
  if (weight) {
    return (cost * count * (weight / 1000)).toFixed(1);
  }
  return (cost * count).toFixed(1);
};

// ДОБАВЛЕНИЕ В КОРЗИНУ
export const addToCart = (item: ICartItem, dispatch: Dispatch) => {
  let localCart = localStorage.getItem("user-cart");

  if (!localCart || !isJson(localCart)) {
    dispatch(cartActions.setItems([item]));
    return;
  }

  const localCartItems: ICartItem[] = JSON.parse(localCart);
  let changed = false;

  localCartItems.forEach((elem) => {
    if (elem.product.product_id === item.product.product_id && elem.weight === item.weight) {
      changeCartItem(elem, elem.count + 1, dispatch);
      changed = true;
    }
  });

  if (changed) {
    return;
  }

  localCartItems.push(item);
  dispatch(cartActions.setItems(localCartItems));
};

// ПОЛУЧЕНИЕ КОРЗИНЫ В REDUX
export const setCart = (dispatch: Dispatch) => {
  const cartItems = getCartFromLS();

  if (!cartItems) {
    return;
  }

  dispatch(cartActions.setItems(cartItems));
};

// УДАЛЕНИЕ ЭЛЕМЕНТА
export const deleteCartItem = (id: string | number, dispatch: Dispatch) => {
  let cartItems = getCartFromLS();

  if (!cartItems) {
    return;
  }

  cartItems = cartItems.filter((item) => item.product.product_id !== id);

  dispatch(cartActions.setItems(cartItems));
};

// ПОЛУЧЕНИЕ ОБЩЕЙ СТОИМОСТИ
export const getTotalPrice = (cartItem: ICartItem[]) => {
  let totalPrice = 0;
  cartItem.forEach((elem) => {
    totalPrice += elem.total_cost;
  });
  return totalPrice;
};

// ИЗМЕНЕНИЕ ЭЛЕМЕНТА КОРЗИНЫ
export const changeCartItem = (cartItem: ICartItem, count: number, dispatch: Dispatch) => {
  let newCartItem = {
    count: count,
    product: cartItem.product,
    weight: cartItem.weight,
    total_cost: Number.parseFloat(totalCost(cartItem.product.cost, count, cartItem.weight)),
  };

  let cartList = getCartFromLS();

  if (!cartList) {
    return;
  }

  cartList = cartList.map((item) => {
    if (item.product.product_id === newCartItem.product.product_id && item.weight === newCartItem.weight) {   
      return newCartItem;
    }
    return item;
  });

  dispatch(cartActions.setItems(cartList));
};
