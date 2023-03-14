import React, { useContext, useEffect, useRef, useState } from "react";
import PopUpComponent from "../../components/PopUpComponents/PopUpComponent";
import { PopUpContextValues } from "../../context/PopUpContext";
import { IPopUp } from "../../interfaces";

interface Props {
  item: IPopUp
}

const PopUp = (props: Props) => {
  const { deletePopUp } = useContext(PopUpContextValues);
  const [isActive, setIsActive] = useState<boolean>(true);

  useEffect(() => {
    
    setTimeout(() => {  
      setIsActive(false)
    }, 4700)
    deletePopUp();
  }, []);
  return <PopUpComponent popUp={props.item} isActive={isActive}/>;
};

export default PopUp;
