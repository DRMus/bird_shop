import { useContext } from "react";
import classNames from "classnames";

import ShopMenuContext from "../../../context/shopMenuContext";
import { arrowDownSVG } from "../../../img/svg/arrowDown";
import { IShopItem } from "../../../interfaces/shopMenu";
import DropDownModule from "../../../containers/DropDownModule";

interface Props {
  item: IShopItem;
}

const ShopMenuItem = (props: Props) => {
  const { dropDownIsActive, showDropDown } = useContext(ShopMenuContext);
  return (
    <div className="shop-menu--item flex text-lg relative">
      <div
        className="shop-menu--name cursor-pointer flex gap-1.5"
        onClick={(e) => (props.item.isDropDown ? showDropDown(!dropDownIsActive) : null)}
      >
        <p className="text-mtextgray">{props.item.name}</p>
        {props.item.isDropDown && (
          <span
            className={classNames("arrow-down transition-all duration-277", {
              "rotate-180 fill-mgreen": dropDownIsActive,
            })}
          >
            {arrowDownSVG}
          </span>
        )}
      </div>

      {props.item.isDropDown && dropDownIsActive && <DropDownModule startPage={props.item.page} />}
    </div>
  );
};

export default ShopMenuItem;
