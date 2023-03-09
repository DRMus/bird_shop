import axios from "../../core/axios"
import { ICatalogItem } from "../../interfaces/api"

export default () => {
  return axios.get<any>("/Categories")
}