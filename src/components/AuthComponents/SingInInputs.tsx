import React from "react";
import FormInputComponent from "../TemplatesComponents/FormInputComponent";

const SingInInputs = () => {
  return (
    <>
      <FormInputComponent placeholder="Телефон" name="phone_number" />
      <FormInputComponent placeholder="Пароль" name="password" type="password" />
    </>
  );
};

export default SingInInputs;
