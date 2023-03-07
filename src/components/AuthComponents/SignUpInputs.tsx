import React from "react";
import FormInputComponent from "../TemplatesComponents/FormInputComponent";

const SignUpInputs = () => {
  return (
    <>
      <FormInputComponent placeholder="Телефон" name="phone_number" />
      <FormInputComponent placeholder="Пароль" name="password" type="password" />
      <FormInputComponent placeholder="Email" name="email" />
      <FormInputComponent placeholder="ФИО" name="fullname" />
      <FormInputComponent placeholder="Адрес" name="address" />
      
    </>
  );
};

export default SignUpInputs;
