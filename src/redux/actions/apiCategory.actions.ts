import { AxiosResponse } from "axios"
import { ICatalogItem } from "../../interfaces/api"
import { IShopItemTag } from "../../interfaces/shopMenu";
import getCategories from "../../utils/Api/getCategories"
import { ApiCatalogs } from "../types"

const setCategoryList = (interimData: IShopItemTag[]) => {
  interimData = interimData.map((item) => {
    if (item.category.includes("Готовые миксы")) {
      item.page = "mix";
    } else if (item.category.includes("Кормушки")) {
      item.page = "feeders";
    }
    window.location.pathname.includes(item.page) ? (item.active = true) : (item.active = false);
    return item;
  });
  return interimData
};

const categoriesActions = {
  setCatalogs: (payload: IShopItemTag[]) => ({
    type: ApiCatalogs.SET_CATALOGS,
    payload
  }),
  fetchCatalogs: () => (dispatch: any) => {
    getCategories().then((resp: AxiosResponse<IShopItemTag[]>) => {
      resp.data = setCategoryList(resp.data);
      dispatch(categoriesActions.setCatalogs(resp.data))
    })
    
  }
}

export default categoriesActions