import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserOrdersComponent from "../../components/ProfileComponents/OrdersComponents/UserOrdersComponent";
import { IOrderItem } from "../../interfaces/api";
import { IInitialStateToken, IRootReducer } from "../../redux";
import { getTokenReducer } from "../../redux/selectors/token.selectors";
import fetchOrders from "../../utils/Api/fetchOrders";

const UserOrders = () => {
  const [userOrders, setUserOrders] = useState<IOrderItem[]>([]);
  const { token, decodedToken, isExpired } = useSelector<IRootReducer, IInitialStateToken>(
    getTokenReducer
  );
  useEffect(() => {
    if (isExpired || !decodedToken) {
      return;
    }

    fetchOrders.getOrders(decodedToken.id).then((resp: AxiosResponse<IOrderItem[]>) => {
      console.log(resp.data);
      
      setUserOrders(resp.data);
    });
  }, []);
  return <UserOrdersComponent userOrders={userOrders}/>;
};

export default UserOrders;
