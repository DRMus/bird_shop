import React from "react";
import AuthInputComponent from "./TemplateComponents/FormInputComponent";

const SingInInputs = () => {
  return (
    <>
      <AuthInputComponent placeholder="Телефон" name="phone_number" />
      <AuthInputComponent placeholder="Пароль" name="password" type="password" />
    </>
  );
};

export default SingInInputs;
