import React from "react";
import {arrowDownSVG} from "../../img/svg/arrowDown";

interface Props {
  prevPage: () => void;
}

const PrevPageComponent = ({prevPage}: Props) => {
  return (
    <div
      className="catalog--main-section--back flex h-fit w-fit items-center gap-1 cursor-pointer"
      onClick={prevPage}
    >
      <span className="arrow-down transition-transform duration-277 rotate-90 fill-mgreen">
        {arrowDownSVG}
      </span>
      <p className="text-xl">Назад</p>
    </div>
  );
};

export default PrevPageComponent;
