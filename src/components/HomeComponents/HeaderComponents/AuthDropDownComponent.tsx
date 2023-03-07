import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import useOutsideAlerter from "../../../utils/useOutsideAlerter";
import DropDownTemplateComponent from "../../TemplatesComponents/DropDownTemplateComponent";

interface Props {
  showAuthModule: (state: boolean) => void;
}

const AuthDropDownComponent = ({ showAuthModule }: Props) => {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const redirectTo = useNavigate();

  useOutsideAlerter(dropDownRef, showAuthModule);
  return (
    <DropDownTemplateComponent
      className="gap-5 px-6 py-8"
      showElement={showAuthModule}
      stickySide="right"
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
    </DropDownTemplateComponent>
  );
};

export default AuthDropDownComponent;
