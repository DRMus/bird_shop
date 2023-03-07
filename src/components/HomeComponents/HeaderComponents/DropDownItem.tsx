import classNames from "classnames";
import React from "react";
import { IShopItemTag } from "../../../interfaces/shopMenu";

interface Props {
  item: IShopItemTag;
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const DropDownItem = (props: Props) => {
  return (
    <div
      className={classNames(
        "drop-down--item pl-6 pr-8 py-3 first:pt-6 last:pb-6 cursor-pointer hover:bg-gray-100",
        {
          "text-mgreen": props.item.active,
          "text-mtextgray": !props.item.active,
        }
      )}
      onClick={props.onClick}
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default DropDownItem;
