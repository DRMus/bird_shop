import React, { useRef, useState } from "react";
import { IPopUp } from "../interfaces";
import PopUpPortal from "../portals/PopUpPortal";

interface IPopUpContext {
  addPopUp: (type: "done" | "error", message: string) => void;
  deletePopUp: () => void;
}

interface Props {
  children: React.ReactNode;
}

export const PopUpContextValues = React.createContext<IPopUpContext>({
  addPopUp: () => {},
  deletePopUp: () => {},
});

const PopUpContext = (props: Props) => {
  const [popUpList, setPopUpList] = useState<IPopUp[]>([]);
  const interimPopUpListRef = useRef<IPopUp[]>([]);

  const addPopUp = (type: "done" | "error", message: string) => {
    let popUp = {
      type,
      message,
    };

    interimPopUpListRef.current = [...popUpList, popUp];
    setPopUpList(interimPopUpListRef.current);
  };

  const deletePopUp = () => {
    setTimeout(() => {
      interimPopUpListRef.current = interimPopUpListRef.current.slice(1);
      setPopUpList(interimPopUpListRef.current);
    }, 5000);
  };

  console.log("rerend");

  return (
    <PopUpContextValues.Provider
      value={{
        addPopUp,
        deletePopUp,
      }}
    >
      {props.children}
      <PopUpPortal popUpList={popUpList} />
    </PopUpContextValues.Provider>
  );
};
export default PopUpContext;
