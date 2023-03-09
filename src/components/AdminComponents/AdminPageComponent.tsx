import React from "react";
import { ICatalogItem } from "../../interfaces/api";
import Button from "../TemplatesComponents/Button";
import FormInputComponent from "../TemplatesComponents/FormInputComponent";
import MainSectionComponent from "../TemplatesComponents/MainSectionComponents/MainSectionComponent";
import RadioInputComponent from "../TemplatesComponents/RadioInputComponent";
import SelectComponent from "../TemplatesComponents/SelectComponent";

interface Props {
  numberInputValue: number;
  categoriesList: ICatalogItem[];
  onSubmitProduct: React.FormEventHandler<HTMLFormElement>;
  onNumberInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AdminPageComponent = ({ onSubmitProduct, onNumberInputChange, ...props }: Props) => {
  return (
    <div className="home-sections w-mscreen flex flex-col gap-20 py-20">
      <MainSectionComponent header="Продукты">
        <form
          onSubmit={onSubmitProduct}
          className="flex flex-col w-full gap-1"
          encType="multipart/form-data"
        >
          <FormInputComponent name="name" placeholder="Название продукта" />
          <SelectComponent name="catalog" optionsList={props.categoriesList} />
          <FormInputComponent name="second_name" placeholder="Подкатегория" />
          <FormInputComponent name="description" placeholder="Описание" textArea />
          <FormInputComponent
            name="cost"
            placeholder="Цена"
            type="number"
            onChange={onNumberInputChange}
            value={props.numberInputValue}
          />
          <FormInputComponent name="image" placeholder="Изображение" type="file" />
          <Button type="submit" content="Добавить" />
        </form>
      </MainSectionComponent>
    </div>
  );
};

export default AdminPageComponent;

{
  // <MainSectionComponent header="Каталоги">
  //   <form onSubmit={onSubmitCatalog} className="flex flex-col w-full gap-1">
  //     <FormInputComponent name="catalog" placeholder="Название каталога" />
  //     <div className="radio flex flex-col gap-2 mb-6">
  //       <p className="text-base text-micon">Имеет выбор веса:</p>
  //       <div className="radio flex gap-2">
  //         <RadioInputComponent name="hasWeight" id="on" content="Да" value={1} />
  //         <RadioInputComponent name="hasWeight" id="off" content="Нет" value={0} checked />
  //       </div>
  //     </div>
  //     <Button type="submit" content="Добавить" />
  //   </form>
  // </MainSectionComponent>
}
