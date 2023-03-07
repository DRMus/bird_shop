import classNames from "classnames";
import React from "react";
import { IShopItemTag } from "../../../interfaces/shopMenu";
import DropDownTemplateComponent from "../../TemplatesComponents/DropDownTemplateComponent";
import DropDownItem from "./DropDownItem";

interface Props {
  startPage: string;
  moduleTags: IShopItemTag[];
  dropDownRef: React.RefObject<HTMLDivElement>;
  redirectToPage: (path: IShopItemTag) => void;
  showDropDown: (state: boolean) => void;
}

const DropDownModule = ({ showDropDown, redirectToPage, ...props }: Props) => {
  return (
    <DropDownTemplateComponent showElement={showDropDown} stickySide="left" fixedWidth>
      {props.moduleTags.map((item, index) => (
        <DropDownItem key={index} item={item} onClick={(e) => redirectToPage(item)} />
      ))}
    </DropDownTemplateComponent>
  );
};

export default DropDownModule;
