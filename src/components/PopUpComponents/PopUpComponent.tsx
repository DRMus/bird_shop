import classNames from "classnames";
import React from "react";
import { IPopUp } from "../../interfaces";

interface Props {
  popUp: IPopUp;
  isActive: boolean;
}

const PopUpComponent = (props: Props) => {
  return (
    <div
      className={classNames("w-[400px] backdrop-blur-sm rounded-md py-2 px-4 transition-all", {
        "pop-up--close opacity-0": !props.isActive,
        "pop-up--show": props.isActive,
        "bg-mgreen/70": props.popUp.type === "done",
        "bg-red-400/70": props.popUp.type === "error"
      })}
    >
      <p className="text-base text-white">{props.popUp.message}</p>
    </div>
  );
};

export default PopUpComponent;
