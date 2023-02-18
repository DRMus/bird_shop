import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AuthComponent from "../components/AuthComponents/AuthComponent";
import useQuery from "../utils/useQuery";

const AuthPage = () => {
  const [isLoginPage, setIsLoginPage] = useState<boolean>(false);

  const redirectTo = useNavigate();
  const query = useQuery();

  const changeFormUI = (state: boolean) => {
    setIsLoginPage(state);
  };

  useEffect(() => {
    if (query.get("q") === "login") {
      changeFormUI(true);
    } else {
      changeFormUI(false);
    }
  }, [query.get("q")]);

  return (
    <AuthComponent isLoginPage={isLoginPage} changeFormUI={changeFormUI} redirectTo={redirectTo} />
  );
};

export default AuthPage;
