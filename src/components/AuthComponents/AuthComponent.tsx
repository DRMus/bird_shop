import CloseOutlined from "@ant-design/icons/lib/icons/CloseOutlined";
import { NavigateFunction, useNavigate } from "react-router";

interface Props {
  isLoginPage: boolean;
  changeFormUI: (state: boolean) => void;
  redirectTo: NavigateFunction;
}

const AuthComponent = ({ changeFormUI, redirectTo, ...props }: Props) => {
  return (
    <div className="w-mscreen flex flex-col items-center justify-center py-48">
      <div className="auth-section flex flex-col w-[650px] bg-white py-12 px-10 rounded-xl shadow-xl gap-10">
        <div className="auth-header flex justify-between">
          <p className="text-2xl text-micon font-bold">
            {props.isLoginPage ? "Вход в аккаунт" : "Регистрация"}
          </p>
          <CloseOutlined
            className="text-xl text-mgreen cursor-pointer"
            onClick={(e) => redirectTo(-1)}
          />
        </div>
        <div className="auth-inputs flex flex-col gap-5 text-lg">
          <div className="auth-input w-full flex flex-col gap-1">
            <input
              type="text"
              className="bg-msearchgray p-4 py-3.5 outline-none rounded-md border border-gray-300 focus:border-gray-400 w-full"
              placeholder="Телефон"
            />
            <p className="input-alert text-red-400 text-sm h-4 flex justify-end"></p>
          </div>

          <div className="auth-input w-full">
            <input
              type="password"
              className="bg-msearchgray p-4 py-3.5 outline-none rounded-md border border-gray-300 focus:border-gray-400 w-full"
              placeholder="Пароль"
            />
            <p className="input-alert text-red-400 text-sm h-4 flex justify-end"></p>
          </div>
        </div>
        <div className="auth-btns flex justify-between">
          <button
            className="text-base text-micon px-8 py-3 rounded-xl border border-gray-300 basis-5/12 transition-colors hover:bg-gray-100 active:bg-gray-200"
            onClick={(e) => (props.isLoginPage ? changeFormUI(false) : changeFormUI(true))}
          >
            {props.isLoginPage ? "Зарегистрироваться" : "Войти в аккаунт"}
          </button>
          <button className="text-base text-white px-8 py-3 rounded-xl bg-mgreen basis-5/12 transition-colors hover:bg-mstronggreen active:bg-mgreen">
            {props.isLoginPage ? "Войти в аккаунт" : "Зарегистрироваться"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;
