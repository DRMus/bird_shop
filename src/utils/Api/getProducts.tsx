import axios from "axios";

const getProducts = (listName: string, id?: string | number, limit?: string | number) => {
  return axios(`http://localhost:5000/${listName}`, {
    method: "GET",
    params: { id, _limit: limit },
  });
};

export default getProducts;
