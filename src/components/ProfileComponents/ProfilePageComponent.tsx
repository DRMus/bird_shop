import React from "react";
import UserOrders from "../../containers/Profile/UserOrders";
import { IUserInfo } from "../../interfaces/api";
import SpinnerComponent from "../TemplatesComponents/SpinnerComponent";
import SectionTemplate from "./SectionTemplate";
import UserInformation from "./UserInformation";

interface Props {
  userInfo: IUserInfo | undefined;
  isEditModalVisible: boolean;
  showEditModal: (state: boolean) => void;
  submitEditUser: (e: any) => void;
}

const ProfilePageComponent = ({ showEditModal, submitEditUser, ...props }: Props) => {
  return (
    <div className="home-sections w-mscreen flex flex-col gap-6 py-14 text-micon">
      <div className="profile-section-main flex gap-5">
        <SectionTemplate header="Аккаунт">
          {props.userInfo ? (
            <UserInformation
              userInfo={props.userInfo}
              isEditModalVisible={props.isEditModalVisible}
              showEditModal={showEditModal}
              submitEditUser={submitEditUser}
            />
          ) : (
            <SpinnerComponent fontSize={60} className="w-[350px] h-64" />
          )}
        </SectionTemplate>
        <SectionTemplate header="Все заказы:" classNameMain="grow" classNameChildren="p-0 max-h-[836px] overflow-auto">
          <UserOrders />
        </SectionTemplate>
      </div>
    </div>
  );
};

export default ProfilePageComponent;
