import axios from "../../core/axios"
import { ICatalogItem } from "../../interfaces/api"

export default async () => {
  return await axios.get("/Categories")
}