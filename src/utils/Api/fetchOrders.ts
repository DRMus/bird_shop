import axios from "../../core/axios";
import { IOrderItem } from "../../interfaces/api";

const fetchOrders = {
  getOrders: (userId: number | string) => axios.get(`/orders/${userId}`),
  postOrder: (order: IOrderItem) => axios.post(`/orders`, order)
};
export default fetchOrders;
