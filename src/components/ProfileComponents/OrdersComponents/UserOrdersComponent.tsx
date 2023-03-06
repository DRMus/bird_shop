import React from "react";
import UserOrderItem from "./UserOrderItem";

const UserOrdersComponent = () => {
  return (
    <>
      {[2, 2, 3].map((item, index) => (
        <UserOrderItem key={index} />
      ))}
    </>
  );
};

export default UserOrdersComponent;
