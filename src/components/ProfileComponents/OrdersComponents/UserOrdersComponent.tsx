import React from "react";
import { IOrderItem } from "../../../interfaces/api";
import EmptyList from "../../TemplatesComponents/EmptyList";
import UserOrderItem from "./UserOrderItem";

interface Props {
  userOrders: IOrderItem[];
}

const UserOrdersComponent = (props: Props) => {
  return (
    <>
      {props.userOrders.length ? props.userOrders.map((item, index) => (
        <UserOrderItem key={index} order={item}/>
      )): <EmptyList descrip="Заказы отсутствуют" height="[350px]" width="full"/>}
    </>
  );
};

export default UserOrdersComponent;
