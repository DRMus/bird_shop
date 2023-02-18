import React, { useRef } from "react";
import { useNavigate } from "react-router";
import useOutsideAlerter from "../../../utils/useOutsideAlerter";

interface Props {
  showAuthModule: (state: boolean) => void;
}

const AuthDropDownComponent = ({ showAuthModule }: Props) => {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const redirectTo = useNavigate();

  useOutsideAlerter(dropDownRef, showAuthModule);
  return (
    <div
      className="auth-module drop-down absolute top-full right-0 flex flex-col gap-5 bg-white shadow-xl z-50 px-6 py-8 rounded-xl"
      ref={dropDownRef}
    >
      <button
        className="text-base text-white px-8 py-3 rounded-xl bg-mgreen transition-colors hover:bg-mstronggreen active:bg-mgreen"
        onClick={(e) => {
          redirectTo("/auth?q=login");
          showAuthModule(false);
        }}
      >
        Войти в аккаунт
      </button>
      <button
        className="text-base text-micon px-8 py-3 rounded-xl border border-gray-300 transition-colors hover:bg-gray-100 active:bg-gray-200"
        onClick={(e) => {
          redirectTo("/auth?q=reg");
          showAuthModule(false);
        }}
      >
        Зарегистрироваться
      </button>
    </div>
  );
};

export default AuthDropDownComponent;
