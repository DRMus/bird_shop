import React, { useEffect, useState } from "react";
import AdminPageComponent from "../../components/AdminComponents/AdminPageComponent";
import ErrorsContext from "../../context/ErrorsContext";
import { ICatalogItem, IErrorsRender, IProductItem } from "../../interfaces/api";
import getCategories from "../../utils/Api/getCategories";
import postProduct from "../../utils/Api/postProduct";
import getFormData from "../../utils/getFormData";

const AdminPage = () => {
  const [numberInputValue, setNumberInputValue] = useState<number>(0);
  const [categoriesList, setCategoriesList] = useState<ICatalogItem[]>([]);
  const [formErrors, setFormErrors] = useState<IErrorsRender | null>(null);

  const sendProduct = (formData: FormData) => {
    let validateObject = {
      name : formData.get("name") as string | null,
      category_id : Number.parseInt(formData.get("catalog") as string),
      cost : Number.parseInt(formData.get("cost") as string),
      image : formData.get("image") as string | null,
    }

    let errors: IErrorsRender = {};
    
    Object.entries(validateObject).map(([key, value]) => {
      if(!value || Number.isNaN(value)) {
        errors[key] = "Поле обязательно для заполнения"
      }
    })

    if (Object.values(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    let postProductData: IProductItem = {
      category_id: validateObject.category_id,
      name: validateObject.name as string,
      second_name: (formData.get("second_name") || "") as string,
      description: (formData.get("description") || "") as string,
      cost: validateObject.cost,
      image: validateObject.image as string,
    };

    postProduct(postProductData).then((resp) => {
      console.log(resp);
    });
  };

  const onSubmitProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getFormData(e).then((formData) => {
      sendProduct(formData);
    });
  };

  const onNumberInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = Number.parseInt(e.target.value);
    if (value > 0) {
      setNumberInputValue(value);
    } else {
      setNumberInputValue(NaN);
    }
  };

  useEffect(() => {
    getCategories().then((resp) => {
      setCategoriesList(resp.data as ICatalogItem[]);
    });
  }, []);

  return (
    <ErrorsContext.Provider
      value={{
        formErrors,
      }}
    >
      <AdminPageComponent
        numberInputValue={numberInputValue}
        categoriesList={categoriesList}
        onSubmitProduct={onSubmitProduct}
        onNumberInputChange={onNumberInputChange}
      />
    </ErrorsContext.Provider>
  );
};

export default AdminPage;
