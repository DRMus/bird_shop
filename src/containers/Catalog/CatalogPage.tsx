import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import CatalogPageComponent from "../../components/CatalogComponents/CatalogPageComponent";
import { IShopItemTag } from "../../interfaces/shopMenu";
import { IRootReducer } from "../../redux";
import { getCategoriesRedux } from "../../redux/selectors/apiCategory.selectors";

const CatalogPage = () => {
  const [renderingComponent, setRenderingComponent] = useState<JSX.Element>(
    <div className="">Еще нет</div>
  );
  const [pagesCount, setPagesCount] = useState(1);
  const [selectedPage, setSelectedPage] = useState(1);

  const catalogs = useSelector<IRootReducer, IShopItemTag[] | null>(getCategoriesRedux);

  const getPagesCount = (pages: number) => {
    setPagesCount(pages);
  };
  const selectPage = (page: number) => {
    if (page < 1 || page > pagesCount) {
      return;
    }

    setSelectedPage(page);
  };

  useEffect(() => {
    if (catalogs) {
      console.log("есть");
      setRenderingComponent(
        <CatalogPageComponent
          catalogs={catalogs}
          pagesCount={pagesCount}
          selectedPage={selectedPage}
          getPagesCount={getPagesCount}
          selectPage={selectPage}
        />
      );
    }
  }, [catalogs]);
  return <>{renderingComponent}</>;
};

export default CatalogPage;
