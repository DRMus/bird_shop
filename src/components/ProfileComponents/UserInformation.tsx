import React from "react";
import formatPhoneNumber from "../../utils/formatPhoneNumber";
import avatarPNG from "../../img/png/avatar.png";

const UserInformation = () => {
  return (
    <div className="user-section flex flex-col gap-4">
      <div className="edit-profile flex justify-end">X</div>
      <div className="user-information flex gap-5">
        <img
          className="user-avatar rounded-full h-[130px] w-[130px] bg-slate-300"
          src={avatarPNG}
        />
        <div className="user-information--data w-52 flex flex-col gap-3">
          <p className="font-bold text-base">Николаев Николай Николаевич</p>
          <p className="user-telephone text-base text-zinc-500">
            {formatPhoneNumber("+79962191876")}
          </p>
          <p className="user-email text-base text-zinc-500">ditrom7306@mail.ru</p>
        </div>
      </div>
      <div className="user-location flex flex-col gap-2">
        <p className="text-sm text-zinc-500 px-1">Адрес:</p>
        <div className="user-location--box bg-mgreen px-5 py-3 rounded-lg text-white">
          <p className="">Россия, г. Москва, ул. Ленина, д. 50, кв. 2</p>
          <p className="">Индекс: 256743</p>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
