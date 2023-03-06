import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import ProfilePageComponent from "../../components/ProfileComponents/ProfilePageComponent";
import ErrorsContext from "../../context/ErrorsContext";
import { IErrorsRender, IUserInfo } from "../../interfaces/api";
import { IInitialStateToken, IRootReducer } from "../../redux";
import tokenActions from "../../redux/actions/token.actions";
import { getTokenReducer } from "../../redux/selectors/token.selectors";
import getProfileInfo from "../../utils/Api/getProfileInfo";
import putUser from "../../utils/Api/putUser";

const ProfilePage = () => {
  const [userInfo, setUserInfo] = useState<IUserInfo>();
  const [isEditModalVisible, setisEditModalVisible] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<IErrorsRender | null>(null);

  const redirectTo = useNavigate();
  const dispatch = useDispatch();
  const { isExpired, decodedToken, token } = useSelector<IRootReducer, IInitialStateToken>(
    getTokenReducer
  );

  const showEditModal = (state: boolean) => {
    setisEditModalVisible(state);
  };

  const checkAuthorization = () => {
    if (isExpired) {
      redirectTo("/");
      return;
    }

    if (decodedToken) {
      getProfileInfo(decodedToken.id, token)
        .then((item) => {
          setUserInfo(item.data);
        })
        .catch(() => {
          redirectTo("/");
        });
    }
  };

  const submitEditUser = (e: any) => {
    e.preventDefault();
    let formData = new FormData();
    Array.from(e.target.elements as HTMLInputElement[]).forEach((item: HTMLInputElement) => {
      if (item.name) {
        formData.append(item.name, item.value);
      }
    });

    var response = putUser(formData, decodedToken?.id || "");
    const errors = response as IErrorsRender;

    if (errors.phoneNumber || errors.email) {
      setFormErrors(errors);
      return;
    }
    response = response as Promise<AxiosResponse<any, any>>;

    response
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    tokenActions
      .checkToken()(dispatch)
      .then(() => checkAuthorization());
  }, []);
  return (
    <ErrorsContext.Provider
      value={{
        formErrors,
      }}
    >
      <ProfilePageComponent
        userInfo={userInfo}
        isEditModalVisible={isEditModalVisible}
        showEditModal={showEditModal}
        submitEditUser={submitEditUser}
      />
    </ErrorsContext.Provider>
  );
};

export default ProfilePage;
