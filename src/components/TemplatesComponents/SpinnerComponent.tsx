import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React, { useEffect, useState } from "react";

interface Props {
  fontSize: number;
  className: string;
}

const SpinnerComponent = (props: Props) => {
  const [antIcon, setAntIcon] = useState<JSX.Element>();

  useEffect(() => {
    setAntIcon(<LoadingOutlined style={{ fontSize: props.fontSize, color: "#3FCF5E" }} spin />);
  }, []);
  return (
    <div className={"flex justify-center items-center " + props.className}>
      <Spin indicator={antIcon}/>
    </div>
  );
};

export default SpinnerComponent;
