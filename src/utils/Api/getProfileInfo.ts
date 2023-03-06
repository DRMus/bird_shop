import axios from "../../core/axios"

export default (id: string, token: string) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return axios.get(`/users/${id}`);
}