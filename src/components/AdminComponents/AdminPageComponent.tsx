import React from "react";
import Button from "../TemplatesComponents/Button";
import FormInputComponent from "../TemplatesComponents/FormInputComponent";
import MainSectionComponent from "../TemplatesComponents/MainSectionComponents/MainSectionComponent";

interface Props {
  onSubmitCatalog: React.FormEventHandler<HTMLFormElement>;
  onSubmitProduct: React.FormEventHandler<HTMLFormElement>;
}

const AdminPageComponent = ({ onSubmitCatalog, onSubmitProduct, ...props }: Props) => {
  return (
    <div className="home-sections w-mscreen flex flex-col gap-20 py-20">
      <MainSectionComponent header="Каталоги">
        <form onSubmit={onSubmitCatalog} className="flex flex-col w-full">
          <FormInputComponent name="catalog" placeholder="Название каталога" />
          <Button type="submit" content="Добавить" />
        </form>
      </MainSectionComponent>
      <MainSectionComponent header="Продукты">
        <form onSubmit={onSubmitProduct} className="flex flex-col w-full" encType="multipart/form-data">
          <FormInputComponent name="product" placeholder="Название продукта" />
          <FormInputComponent name="catalog" placeholder="Каталог" />
          <FormInputComponent name="second_name" placeholder="Подкатегория" />
          <FormInputComponent name="description" placeholder="Описание" textArea/>
          <FormInputComponent name="cost" placeholder="Цена" type="number"/>
          <FormInputComponent name="image" placeholder="Изображение" type="file"/>
          <Button type="submit" content="Добавить" />
        </form>
      </MainSectionComponent>
    </div>
  );
};

export default AdminPageComponent;
