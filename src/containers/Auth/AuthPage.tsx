import { AxiosError, AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AuthComponent from "../../components/AuthComponents/AuthComponent";
import ErrorsContext from "../../context/ErrorsContext";
import axios from "../../core/axios";
import { IErrorsRender, ISignUpErrors, IUserInfo } from "../../interfaces/api";
import signUpUser from "../../utils/Api/signUpUser";
import useQuery from "../../utils/useQuery";

const AuthPage = () => {
  const [isLoginPage, setIsLoginPage] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<IErrorsRender | null>(null);

  const redirectTo = useNavigate();
  const query = useQuery();

  const changeFormUI = (state: boolean) => {
    setFormErrors(null);
    setIsLoginPage(state);
  };

  const loginUser = (formData: FormData) => {
    let phoneNumber = formData.get("phone_number");
    let password = formData.get("password");

    let postData: IUserInfo = {
      phone_number: phoneNumber as string,
      password: password as string
    }
    axios.post("/users/login", postData).then((item) => {
      console.log(item)
    }).catch((item)=> {
      console.log(item);
    })
  };

  const submitForm = (ev: any) => {
    ev.preventDefault();
    setFormErrors(null);

    let formData = new FormData();
    Array.from(ev.target.elements as HTMLInputElement[]).forEach((item: HTMLInputElement) => {
      if (item.name) {
        formData.append(item.name, item.value);
      }
    });

    if (isLoginPage) {
      loginUser(formData);
    } else {
      var response = signUpUser(formData);
      const errors = response as IErrorsRender;

      if (errors.phoneNumber || errors.email) {
        setFormErrors(errors);
        return;
      }

      response = response as Promise<AxiosResponse<any, any>>;
      response
        .then(() => {
          query.set("q", "login");
          setIsLoginPage(true);
        })
        .catch((err: AxiosError<ISignUpErrors>) => {
          const responseErrors = err.response?.data
          if(responseErrors) {
            setFormErrors({
              email: responseErrors.errors[0] ? "Данная почта уже зарегестрирована" : undefined,
              phoneNumber: responseErrors.errors[1] ? "Данный номер уже зарегестрирован" : undefined,
            })
          }
        });
    }
  };

  useEffect(() => {
    if (query.get("q") === "login") {
      setIsLoginPage(true);
    } else {
      setIsLoginPage(false);
    }
  }, [query.get("q")]);

  return (
    <ErrorsContext.Provider value={{
      formErrors
    }}>
      <AuthComponent
        isLoginPage={isLoginPage}
        changeFormUI={changeFormUI}
        redirectTo={redirectTo}
        submitForm={submitForm}
      />
    </ErrorsContext.Provider>
  );
};

export default AuthPage;
