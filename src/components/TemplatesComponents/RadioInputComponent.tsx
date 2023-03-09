import React, { useContext, useEffect, useState } from "react";
import ErrorsContext from "../../context/ErrorsContext";

interface Props {
  name: string;
  id: string;
  content: string;
  value: number;
  checked?: boolean;
}

const RadioInputComponent = (props: Props) => {
  const { formErrors } = useContext(ErrorsContext);
  const [currentError, setCurrentError] = useState<string | undefined>();

  useEffect(() => {
    if (formErrors && Object.hasOwn(formErrors, props.name)) {
      setCurrentError(Object.getOwnPropertyDescriptor(formErrors, props.name)?.value)
    }
  }, [formErrors]);
  return (
    <div>
      <input
        type="radio"
        className="peer d-none"
        name={props.name}
        id={props.id}
        value={props.value}
        defaultChecked={props.checked}
      />
      <label
        htmlFor={props.id}
        className="px-3 py-1 border-2 border-mgreen rounded-md font-medium text-mgreen cursor-pointer transition-colors peer-checked:bg-mgreen peer-checked:text-white "
      >
        {props.content}
      </label>
      
    </div>
  );
};

export default RadioInputComponent;
