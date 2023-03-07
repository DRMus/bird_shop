import { CloseOutlined } from "@ant-design/icons";
import React from "react";
import ModalWindow from "../../containers/Templates/ModalWindow";
import { IUserInfo } from "../../interfaces/api";
import FormInputComponent from "../TemplatesComponents/FormInputComponent";

interface Props {
  userInfo: IUserInfo;
  showEditModal: (state: boolean) => void;
  submitEditUser: (e: any) => void;
}

const EditUserModal = ({ showEditModal, submitEditUser, ...props }: Props) => {
  return (
    <ModalWindow>
      <div className="flex flex-col shadow-xl bg-white rounded-xl px-11 py-10 w-[650px] gap-10">
        <div className="modal-header flex justify-between">
          <h3 className="text-2xl font-medium">Редактирование аккаунта</h3>
          <CloseOutlined
            className="text-xl text-mgreen cursor-pointer"
            onClick={(e) => showEditModal(false)}
          />
        </div>
        <form method="put" className="flex flex-col gap-5" onSubmit={submitEditUser}>
          <div className="inputs flex flex-col gap-1">
            <FormInputComponent name="fullname" placeholder="ФИО" defaultValue={props.userInfo.fullname || ""}/>
            <FormInputComponent name="phone_number" placeholder="Телефон" defaultValue={props.userInfo.phone_number || ""}/>
            <FormInputComponent name="password" placeholder="Пароль" type={"password"} />
            <FormInputComponent name="email" placeholder="Почта" defaultValue={props.userInfo.email || ""}/>
            <FormInputComponent name="address" placeholder="Адрес" defaultValue={props.userInfo.address || ""}/>
          </div>
          <button
            type="submit"
            className="text-base text-white self-end px-8 py-3 w-5/12 rounded-xl bg-mgreen transition-colors hover:bg-mstronggreen active:bg-mgreen"
          >
            Сохранить
          </button>
        </form>
      </div>
    </ModalWindow>
  );
};

export default EditUserModal;
