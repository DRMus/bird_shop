import classNames from "classnames";
import React from "react";
import { arrowDownSVG } from "../../img/svg/arrowDown";

interface Props {
  pagesCount: number;
  selectedPage: number;
  onClick: (page: number) => void;
}

const PaginationComponent = (props: Props) => {
  return (
    <div className="pagination flex gap-6">
      <span
        className="arrow-down transition-colors duration-277 w-5 rotate-90 fill-gray-400 cursor-pointer hover:fill-mgreen"
        onClick={() => props.onClick(props.selectedPage - 1)}
      >
        {arrowDownSVG}
      </span>

      <div className="pagination--pages flex text-xl gap-5">
        {Array.from(Array(props.pagesCount + 1).keys())
          .slice(1)
          .map((item, index) => (
            <p
              className={classNames("pagination--pages--item transition-colors hover:text-mgreen", {
                "text-gray-400 cursor-pointer": props.selectedPage !== item,
                "text-mgreen": props.selectedPage === item,
              })}
              key={index}
              onClick={() => props.selectedPage !== item && props.onClick(item)}
            >
              {item}
            </p>
          ))}
      </div>

      <span
        className="arrow-down transition-colors duration-277 w-5 -rotate-90 fill-gray-400 cursor-pointer hover:fill-mgreen"
        onClick={() => props.onClick(props.selectedPage + 1)}
      >
        {arrowDownSVG}
      </span>
    </div>
  );
};

export default PaginationComponent;
