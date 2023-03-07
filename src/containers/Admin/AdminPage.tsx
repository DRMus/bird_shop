import React from "react";
import AdminPageComponent from "../../components/AdminComponents/AdminPageComponent";

const AdminPage = () => {
  const onSubmitCatalog = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const onSubmitProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return <AdminPageComponent onSubmitCatalog={onSubmitCatalog} onSubmitProduct={onSubmitProduct} />;
};

export default AdminPage;
