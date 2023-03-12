import { Empty } from "antd";
import React from "react";

interface Props {
  width: string;
  height: string;
  descrip: string;
}

const EmptyList = (props: Props) => {
  return (
    <div className={`w-${props.width} h-${props.height} flex items-center justify-center`}>
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description={<p className="text-base">{props.descrip}</p>}
      />
    </div>
  );
};

export default EmptyList;
