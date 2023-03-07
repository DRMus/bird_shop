import { Empty } from "antd";
import React from "react";

const EmptyCart = () => {
  return (
    <div className="w-[300px] h-[300px] flex items-center justify-center">
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description={<p className="text-base">Корзина пуста</p>}
      />
    </div>
  );
};

export default EmptyCart;
