import React, { useContext, useEffect, useState } from "react";
import ErrorsContext from "../../context/ErrorsContext";
import { ICatalogItem } from "../../interfaces/api";

interface Props {
  name: string;
  optionsList: ICatalogItem[];
}

const SelectComponent = (props: Props) => {
  const { formErrors } = useContext(ErrorsContext);
  const [currentError, setCurrentError] = useState<string | undefined>();

  useEffect(() => {
    if (formErrors && Object.hasOwn(formErrors, props.name)) {
      setCurrentError(Object.getOwnPropertyDescriptor(formErrors, props.name)?.value)
    }
  }, [formErrors]);
  return (
    <div className="auth-input w-full flex flex-col gap-1">
      <select
        name={props.name}
        className="bg-msearchgray p-4 py-3.5 outline-none rounded-md border w-full border-gray-300 focus:border-gray-400"
      >
        {props.optionsList.map((item, index) => (
          <option key={index} value={item.category_id}>
            {item.category}
          </option>
        ))}
      </select>
      <p className="input-alert text-red-400 text-sm h-4 flex justify-end">{currentError}</p>
    </div>
  );
};

export default SelectComponent;
