import axios from "../../core/axios";
import { IUserInfo } from "../../interfaces/api";

export default (formData: FormData) => {
  let phoneNumber = formData.get("phone_number");
  let password = formData.get("password");

  let postData: IUserInfo = {
    phone_number: phoneNumber as string,
    password: password as string,
  };
  
  return axios.post("/users/login", postData)
}