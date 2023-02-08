import classNames from "classnames";
import React from "react";
import { IShopItemTag } from "../../../interfaces/shopMenu";

interface Props {
  startPage: string;
  moduleTags: IShopItemTag[];
  dropDownRef: React.RefObject<HTMLDivElement>;
  redirectToPage: (path: IShopItemTag) => void;
}

const DropDownModule = (props: Props) => {
  return (
    <div
      ref={props.dropDownRef}
      className="drop-down absolute top-full mt-4 left-0 bg-white flex flex-col w-72 shadow-xl rounded-xl overflow-hidden z-50"
    >
      {props.moduleTags.map((item, index) => (
        <div
          className={classNames(
            "drop-down--item pl-6 pr-8 py-3 text-mtextgray first-of-type:pt-6 last-of-type:pb-6",
            {
              "text-mgreen cursor-default": item.active,
              "cursor-pointer hover:bg-gray-100": !item.active,
            }
          )}
          key={index}
          onClick={(e) => {
            !item.active && props.redirectToPage(item);
          }}
        >
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default DropDownModule;
