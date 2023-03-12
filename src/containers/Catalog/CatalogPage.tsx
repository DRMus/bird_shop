import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import CatalogPageComponent from "../../components/CatalogComponents/CatalogPageComponent";
import { IShopItemTag } from "../../interfaces/shopMenu";
import { IRootReducer } from "../../redux";
import { getCategoriesRedux } from "../../redux/selectors/apiCategory.selectors";

const CatalogPage = () => {
  const [pagesCount, setPagesCount] = useState(1);
  const [selectedPage, setSelectedPage] = useState(1);
  const [catalogs, setCatalogs] = useState<IShopItemTag[]>([]);

  const catalogsRedux = useSelector<IRootReducer, IShopItemTag[] | null>(getCategoriesRedux);

  const getPagesCount = (pages: number) => {
    setPagesCount(pages);
  };

  const selectPage = (page: number) => {
    if (page < 1 || page > pagesCount) {
      return;
    }

    setSelectedPage(page);
  };

  const parseCatalogList = () => {
    let catalogsFromLocal;
    try {
      catalogsFromLocal = JSON.parse(localStorage.getItem("catalogs") || "");
    } catch {
      catalogsFromLocal = "";
    }
    
    if (catalogsFromLocal){
      setCatalogs(catalogsFromLocal);
    }

    if(catalogsRedux && !_.isEqual(catalogsFromLocal, catalogsRedux)){
      setCatalogs(catalogsRedux)
      localStorage.setItem("catalogs", JSON.stringify(catalogsRedux))
    }
  }

  useEffect(() => {
    parseCatalogList();
  }, [catalogsRedux]);
  return (
    <CatalogPageComponent
      catalogs={catalogs}
      pagesCount={pagesCount}
      selectedPage={selectedPage}
      getPagesCount={getPagesCount}
      selectPage={selectPage}
    />
  );
};

export default CatalogPage;
