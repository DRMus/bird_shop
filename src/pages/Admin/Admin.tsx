import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import AdminPage from "../../containers/Admin/AdminPage";

const Admin = () => {
  const redirectTo = useNavigate();
  useEffect(() => {
    let secretKey = localStorage.getItem("secret");
    if (secretKey !== "birds-admin") {
      redirectTo("/");
    }
  }, [])
  return <AdminPage />;
};

export default Admin;
