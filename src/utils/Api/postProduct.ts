import axios from "../../core/axios"
import { IProductItem } from "../../interfaces/api"

export default (postData: IProductItem) => {
  return axios.post("/Products", postData)
}