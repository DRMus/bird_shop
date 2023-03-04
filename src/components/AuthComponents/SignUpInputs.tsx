import React from "react";
import AuthInputComponent from "./TemplateComponents/FormInputComponent";

const SignUpInputs = () => {
  return (
    <>
      <AuthInputComponent placeholder="Телефон" name="phone_number" />
      <AuthInputComponent placeholder="Пароль" name="password" type="password" />
      <AuthInputComponent placeholder="Email" name="email" />
      <AuthInputComponent placeholder="ФИО" name="fullname" />
      <AuthInputComponent placeholder="Адрес" name="address" />
      
    </>
  );
};

export default SignUpInputs;
