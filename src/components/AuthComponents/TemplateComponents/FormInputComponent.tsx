import classNames from "classnames";
import React, { HTMLInputTypeAttribute, useContext, useEffect, useState } from "react";
import ErrorsContext from "../../../context/ErrorsContext";

interface Props {
  placeholder: string;
  name: string;
  type?: HTMLInputTypeAttribute;
}

const AuthInputComponent = (props: Props) => {
  const { formErrors } = useContext(ErrorsContext);
  const [currentError, setCurrentError] = useState<string | undefined>();

  useEffect(() => {
    switch (props.name) {
      case "email":
        setCurrentError(formErrors?.email);
        break;
      case "phone_number":
        setCurrentError(formErrors?.phoneNumber);
        break;

      default:
        setCurrentError(undefined);
        break;
    }
  }, [formErrors]);

  return (
    <div className="auth-input w-full flex flex-col gap-1">
      <input
        type={props.type || "text"}
        name={props.name}
        className={classNames("bg-msearchgray p-4 py-3.5 outline-none rounded-md border w-full", {
          "border-gray-300 focus:border-gray-400": !currentError,
          "border-red-300 focus:border-red-400": currentError,
        })}
        onChange={() => setCurrentError(undefined)}
        placeholder={props.placeholder}
      />
      <p className="input-alert text-red-400 text-sm h-4 flex justify-end">{currentError}</p>
    </div>
  );
};

export default AuthInputComponent;
