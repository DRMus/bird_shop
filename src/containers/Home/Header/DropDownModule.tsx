import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import DropDownModuleComponent from "../../../components/HomeComponents/HeaderComponents/DropDownModuleComponent";
import ShopMenuContext from "../../../context/shopMenuContext";
import { IShopItemTag } from "../../../interfaces/shopMenu";
import actions from "../../../redux/actions/breadCrumbs.actions";
import useOutsideAlerter from "../../../utils/useOutsideAlerter";

const moduleTags: IShopItemTag[] = [
  {
    name: "Готовые миксы",
    page: "mix",
  },
  {
    name: "Кормушки",
    page: "feeders",
  },
];

interface Props {
  startPage: string;
}

const DropDownModule = (props: Props) => {
  const { showDropDown } = useContext(ShopMenuContext);
  const dispatch = useDispatch()

  const [moduleTagsState, setModuleTagsState] = useState<IShopItemTag[]>(moduleTags);

  const redirectTo = useNavigate();
  const dropDownRef = useRef<HTMLDivElement>(null);

  useOutsideAlerter(dropDownRef, showDropDown);

  const redirectToPage = (path: IShopItemTag) => {
    showDropDown(false);
    dispatch(actions.setBreadCrumbs(1, path.name))
    redirectTo(`${props.startPage}/${path.page}`);
  };

  useEffect(() => {
    setModuleTagsState((prev) => {
      prev = prev.map((item) => {
        window.location.pathname.includes(item.page) ? (item.active = true) : (item.active = false);
        return item;
      });
      return prev;
    });
  }, []);

  return (
    <DropDownModuleComponent
      startPage={props.startPage}
      moduleTags={moduleTagsState}
      dropDownRef={dropDownRef}
      redirectToPage={redirectToPage}
      showDropDown={showDropDown}
    />
  );
};

export default DropDownModule;
