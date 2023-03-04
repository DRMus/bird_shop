import CloseOutlined from "@ant-design/icons/lib/icons/CloseOutlined";
import { NavigateFunction, useNavigate } from "react-router";
import SignUpInputs from "./SignUpInputs";
import SingInInputs from "./SingInInputs";

interface Props {
  isLoginPage: boolean;
  changeFormUI: (state: boolean) => void;
  submitForm: (ev: React.FormEvent<HTMLFormElement>) => void;
  redirectTo: NavigateFunction;
}

const AuthComponent = ({ changeFormUI, redirectTo, submitForm, ...props }: Props) => {
  return (
    <div className="w-mscreen flex flex-col items-center justify-center py-48 transition-all">
      <form
        onSubmit={submitForm}
        className="auth-section flex flex-col w-[650px] bg-white py-12 px-10 rounded-xl shadow-xl gap-10"
      >
        <div className="auth-header flex justify-between">
          <p className="text-2xl text-micon font-bold">
            {props.isLoginPage ? "Вход в аккаунт" : "Регистрация"}
          </p>
          <CloseOutlined
            className="text-xl text-mgreen cursor-pointer"
            onClick={(e) => redirectTo("/")}
          />
        </div>
        <div className="auth-inputs flex flex-col gap-5 text-lg">
          {props.isLoginPage ? <SingInInputs /> : <SignUpInputs />}
        </div>
        <div className="auth-btns flex justify-between">
          <button
            type="reset"
            className="text-base text-micon px-8 py-3 rounded-xl border border-gray-300 basis-5/12 transition-colors hover:bg-gray-100 active:bg-gray-200"
            onClick={(e) => (props.isLoginPage ? changeFormUI(false) : changeFormUI(true))}
          >
            {props.isLoginPage ? "Зарегистрироваться" : "Войти в аккаунт"}
          </button>
          <button
            type="submit"
            className="text-base text-white px-8 py-3 rounded-xl bg-mgreen basis-5/12 transition-colors hover:bg-mstronggreen active:bg-mgreen"
          >
            {props.isLoginPage ? "Войти в аккаунт" : "Зарегистрироваться"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthComponent;
