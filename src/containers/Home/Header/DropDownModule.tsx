import React, { useContext, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import DropDownModuleComponent from "../../../components/HomeComponents/HeaderComponents/DropDownModuleComponent";
import ShopMenuContext from "../../../context/shopMenuContext";
import { IShopItemTag } from "../../../interfaces/shopMenu";
import { IRootReducer } from "../../../redux";
import categoriesActions from "../../../redux/actions/apiCategory.actions";
import breadCrumbActions from "../../../redux/actions/breadCrumbs.actions";
import { getCategoriesRedux } from "../../../redux/selectors/apiCategory.selectors";
import useOutsideAlerter from "../../../utils/useOutsideAlerter";

interface Props {
  startPage: string;
}

const DropDownModule = (props: Props) => {
  const { showDropDown } = useContext(ShopMenuContext);
  const dispatch = useDispatch();

  const catalogs = useSelector<IRootReducer, IShopItemTag[]>(getCategoriesRedux);

  const redirectTo = useNavigate();
  const dropDownRef = useRef<HTMLDivElement>(null);

  useOutsideAlerter(dropDownRef, showDropDown);

  const redirectToPage = (path: IShopItemTag) => {
    showDropDown(false);
    dispatch(breadCrumbActions.setBreadCrumbs(1, path.category));
    redirectTo(`${props.startPage}/${path.page}`);
  };

  useEffect(() => {
    categoriesActions.fetchCatalogs()(dispatch);
  }, []);

  return (
    <DropDownModuleComponent
      startPage={props.startPage}
      moduleTags={catalogs}
      dropDownRef={dropDownRef}
      redirectToPage={redirectToPage}
      showDropDown={showDropDown}
    />
  );
};

export default DropDownModule;
