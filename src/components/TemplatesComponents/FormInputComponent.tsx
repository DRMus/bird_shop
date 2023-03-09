import classNames from "classnames";
import React, { HTMLInputTypeAttribute, useContext, useEffect, useState } from "react";
import ErrorsContext from "../../context/ErrorsContext";

interface Props {
  placeholder: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  textArea?: boolean;
  defaultValue?: string;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const FormInputComponent = (props: Props) => {
  const { formErrors } = useContext(ErrorsContext);
  const [currentError, setCurrentError] = useState<string | undefined>();

  const onChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setCurrentError(undefined);
    props.onChange && props.onChange(e);
  }

  useEffect(() => {
    if (formErrors && Object.hasOwn(formErrors, props.name)) {
      setCurrentError(Object.getOwnPropertyDescriptor(formErrors, props.name)?.value)
    }
  }, [formErrors]);

  return (
    <div className="auth-input w-full flex flex-col gap-1">
      {props.textArea ? (
        <textarea
          name={props.name}
          defaultValue={props.defaultValue}
          className={classNames("bg-msearchgray p-4 py-3.5 outline-none rounded-md border w-full min-h-[150px]", {
            "border-gray-300 focus:border-gray-400": !currentError,
            "border-red-300 focus:border-red-400": currentError,
          })}
          onChange={onChangeInput}
          placeholder={props.placeholder}
        ></textarea>
      ) : (
        <input
          type={props.type || "text"}
          name={props.name}
          defaultValue={props.defaultValue}
          className={classNames("bg-msearchgray p-4 py-3.5 outline-none rounded-md border w-full", {
            "border-gray-300 focus:border-gray-400": !currentError,
            "border-red-300 focus:border-red-400": currentError,
          })}
          onChange={onChangeInput}
          placeholder={props.placeholder}
          value={!Number.isNaN(props.value) ? props.value : ""}
        />
      )}

      <p className="input-alert text-red-400 text-sm h-4 flex justify-end">{currentError}</p>
    </div>
  );
};

export default FormInputComponent;
