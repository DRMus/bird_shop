import React from "react";

import { Route, Routes, useLocation } from "react-router";
import BreadCrumbsComponent from "./BreadCrumbsComponent";
import PaginationComponent from "./PaginationComponent";
import CatalogMainSection from "../../containers/Catalog/CatalogMainSection";
import PrevPage from "../../containers/Templates/PrevPage";

interface Props {}

const CatalogPageComponent = ({ ...props }: Props) => {
  const location = useLocation()
  return (
    <div className="home-sections w-mscreen flex flex-col gap-6 py-20 text-micon">
      <div className="bread-crumbs flex gap-3.5">
        <BreadCrumbsComponent />
      </div>
      <div className="catalog--main-section flex flex-col gap-9">
        <PrevPage />
        <div className="catalog--main-section--content flex flex-wrap w-full gap-x-4 gap-y-9">
          <Routes>
            <Route
              path="mix"
              element={
                <CatalogMainSection pageName={"Готовые миксы"} pathName={"mix"} isSell hasWeight />
              }
            />
            <Route
              path="feeders"
              element={<CatalogMainSection pageName={"Кормушки"} pathName={"feeders"} isSell />}
            />
          </Routes>
        </div>
        {(location.search.indexOf("id") <= 0) && (
          <div className="catalog--main-section--pagination flex w-full items-center justify-center ">
            <PaginationComponent />
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogPageComponent;
