import React from "react";
import { arrowDownSVG } from "../../img/svg/arrowDown";

import { Route, Routes } from "react-router";
import BreadCrumbsComponent from "./BreadCrumbsComponent";
import PaginationComponent from "./PaginationComponent";
import CatalogMainSection from "../../containers/CatalogMainSection";

interface Props {
  prevPage: () => void;
}

const CatalogPageComponent = ({ prevPage, ...props }: Props) => {
  return (
    <div className="home-sections w-mscreen flex flex-col gap-6 py-20 text-micon">
      <div className="bread-crumbs flex gap-3.5">
        <BreadCrumbsComponent />
      </div>
      <div className="catalog--main-section flex flex-col gap-9">
        <div
          className="catalog--main-section--back flex h-fit w-fit items-center gap-1 cursor-pointer"
          onClick={prevPage}
        >
          <span className="arrow-down transition-transform duration-277 rotate-90 fill-mgreen">
            {arrowDownSVG}
          </span>
          <p className="text-xl">Назад</p>
        </div>
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
        {!window.location.href.includes("?") && (
          <div className="catalog--main-section--pagination flex w-full items-center justify-center ">
            <PaginationComponent />
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogPageComponent;
