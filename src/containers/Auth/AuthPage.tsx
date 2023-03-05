import { AxiosError, AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import AuthComponent from "../../components/AuthComponents/AuthComponent";
import ErrorsContext from "../../context/ErrorsContext";
import { IErrorsRender, ISignUpErrors } from "../../interfaces/api";
import tokenActions from "../../redux/actions/token.actions";
import loginUser from "../../utils/Api/loginUser";
import signUpUser from "../../utils/Api/signUpUser";
import useQuery from "../../utils/useQuery";

const AuthPage = () => {
  const [isLoginPage, setIsLoginPage] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<IErrorsRender | null>(null);

  const redirectTo = useNavigate();
  const dispatch = useDispatch();
  const query = useQuery();

  const changeFormUI = (state: boolean) => {
    setFormErrors(null);
    setIsLoginPage(state);
  };

  const submitLoginUser = (formData: FormData) => {
    loginUser(formData)
      .then((item) => {
        localStorage.setItem("token", item.data);
        dispatch(tokenActions.getToken());
        redirectTo("/profile");
      })
      .catch((item) => {
        console.log(item);
      });
  };

  const submitRegisterUser = (formData: FormData) => {
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
        const responseErrors = err.response?.data;
        if (responseErrors) {
          setFormErrors({
            email: responseErrors.errors[0] ? "Данная почта уже зарегестрирована" : undefined,
            phoneNumber: responseErrors.errors[1] ? "Данный номер уже зарегестрирован" : undefined,
          });
        }
      });
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
      submitLoginUser(formData);
    } else {
      submitRegisterUser(formData);
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
    <ErrorsContext.Provider
      value={{
        formErrors,
      }}
    >
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
