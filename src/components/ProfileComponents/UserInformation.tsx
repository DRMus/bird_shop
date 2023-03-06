import React from "react";
import formatPhoneNumber from "../../utils/formatPhoneNumber";
import avatarPNG from "../../img/png/avatar.png";
import { IUserInfo } from "../../interfaces/api";
import { EditOutlined } from "@ant-design/icons";
import EditUserModal from "./EditUserModal";

interface Props {
  userInfo: IUserInfo;
  isEditModalVisible: boolean;
  showEditModal: (state: boolean) => void;
  submitEditUser: (e: any) => void;
}

const UserInformation = ({ showEditModal, submitEditUser, ...props }: Props) => {
  return (
    <div className="user-section flex flex-col gap-4 w-[350px]">
      <div className="edit-profile flex justify-end">
        <EditOutlined
          className="w-5 h-5 cursor-pointer"
          style={{ color: "#3FCF5E" }}
          onClick={() => showEditModal(true)}
        />
        {props.isEditModalVisible && (
          <EditUserModal
            userInfo={props.userInfo}
            showEditModal={showEditModal}
            submitEditUser={submitEditUser}
          />
        )}
      </div>
      <div className="user-information flex gap-5">
        <img
          className="user-avatar rounded-full h-[130px] w-[130px] bg-slate-300"
          src={avatarPNG}
        />
        <div className="user-information--data w-52 flex flex-col gap-3">
          <p className="font-bold text-base">{props.userInfo.fullname}</p>
          <p className="user-telephone text-base text-zinc-500">
            {formatPhoneNumber(props.userInfo.phone_number as string)}
          </p>
          <p className="user-email text-base text-zinc-500">{props.userInfo.email}</p>
        </div>
      </div>
      <div className="user-location flex flex-col gap-2">
        <p className="text-sm text-zinc-500 px-1">Адрес:</p>
        <div className="user-location--box bg-mgreen px-5 py-3 rounded-lg text-white">
          <p className="">{props.userInfo.address}</p>
          {/* <p className="">Индекс: 256743</p> */}
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
