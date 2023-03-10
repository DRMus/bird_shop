import axios from "../../core/axios";

const fetchProducts = {
  getLimitedProducts: async (category_id: number, count: number) =>
    await axios.get(`products/limit/${category_id}/${count}`),
  getPaginationProducts: async (category_id: number, page: number) =>
    await axios.get(`products/page/${category_id}/${page}`),
  getProductById: async (id: string) => await axios.get(`products/${id}`),
};

export default fetchProducts;
