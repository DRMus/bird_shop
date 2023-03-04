import axios from "../../core/axios";
import { IErrorsRender, ISignUpErrors, IUserInfo } from "../../interfaces/api";

const signUpUser = (formData: FormData) => {
  const email = formData.get("email") as string | null;
  var phoneNumber = formData.get("phone_number") as string | null;

  const errors: IErrorsRender = {};

  const phoneNumberRegular = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,12}(\s*)?$/;
  const emailRegular =
    /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/;

  if (!phoneNumber || !phoneNumberRegular.test(phoneNumber)) {
    errors.phoneNumber = "Неверный формат номера телефона";
  }
  if (email && !emailRegular.test(email)) {
    errors.email = "Неверный формат почты";
  }

  if (errors.phoneNumber || errors.email) {
    return errors;
  }

  phoneNumber = phoneNumber?.replace("+", "") || phoneNumber;

  const postData: IUserInfo = {
    fullname: formData.get("fullname") as string | null,
    email: email as string,
    phone_number: phoneNumber as string,
    address: formData.get("address") as string | null,
    password: formData.get("password") as string,
  };

  return axios.post("/users", postData);
};

export default signUpUser;
