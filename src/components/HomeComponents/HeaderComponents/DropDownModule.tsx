import React, { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import ShopMenuContext from "../../../context/shopMenuContext";
import { IShopItemTag } from "../../../interfaces/shopMenu";
import useOutsideAlerter from "../../../utils/useOutsideAlerter";

const moduleTags: IShopItemTag[] = [
  {
    name: "Готовые миксы",
    page: "mix",
  },
  {
    name: "Отдельные виды кормов",
    page: "#",
  },
  {
    name: "Кормушки",
    page: "#",
  },
  {
    name: "Готовые комплекты",
    page: "#",
  },
  {
    name: "Aксессуары и другое",
    page: "#",
  },
];

interface Props {
  startPage: string;
}

const DropDownModule = (props: Props) => {
  const { showDropDown } = useContext(ShopMenuContext);
  const navigationTo = useNavigate();
  const dropDownRef = useRef<HTMLDivElement>(null);

  useOutsideAlerter(dropDownRef, showDropDown);

  const redirectToPage = (path: string) => {
    navigationTo(`${props.startPage}/${path}`);
  };

  return (
    <div
      ref={dropDownRef}
      className="drop-down absolute top-full mt-4 left-0 bg-white flex flex-col w-72 shadow-xl rounded-xl overflow-hidden z-50"
    >
      {moduleTags.map((item, index) => (
        <div
          className="drop-down--item cursor-pointer pl-6 pr-8 py-3 hover:bg-gray-100 first-of-type:pt-6 last-of-type:pb-6"
          key={index}
          onClick={(e) => {
            showDropDown(false);
            redirectToPage(item.page);
          }}
        >
          <p className="text-mtextgray">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default DropDownModule;
