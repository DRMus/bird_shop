import React from "react";
import PrevPage from "../../containers/PrevPage";
import SectionTemplate from "./SectionTemplate";
import UserInformation from "./UserInformation";
import UserOrders from "./UserOrders";


const ProfilePageComponent = () => {
  return (
    <div className="home-sections w-mscreen flex flex-col gap-6 py-14 text-micon">
      <PrevPage />
      <div className="profile-section-main flex gap-5">
        <SectionTemplate header="Аккаунт">
          <UserInformation/>
        </SectionTemplate>
        <SectionTemplate header="Все заказы:">
          <UserOrders/>
        </SectionTemplate>
      </div>
    </div>
  );
};

export default ProfilePageComponent;
