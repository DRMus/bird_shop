import React from "react";
import ReactDOM from "react-dom";
import PopUp from "../containers/PopUp/PopUp";
import { IPopUp } from "../interfaces";

interface Props {
  popUpList: IPopUp[];
}

const PopUpPortal = (props: Props) => {
  return ReactDOM.createPortal(
    <div className="fixed bottom-2 right-2 transition-all flex flex-col gap-2">
      {props.popUpList.map((item, index) => (
        <PopUp key={index} item={item} />
      ))}
    </div>,
    document.body
  );
};

export default PopUpPortal;
