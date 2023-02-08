import React from "react";
import { arrowDownSVG } from "../../img/svg/arrowDown";

const PaginationComponent = () => {
  return (
    <div className="pagination flex gap-6">
      <span className="arrow-down transition-colors duration-277 w-5 rotate-90 fill-gray-400 cursor-pointer hover:fill-mgreen">
        {arrowDownSVG}
      </span>

      <div className="pagination--pages flex text-xl text-gray-400 gap-5">
        {[1, 2, 3].map((item, index) => (
          <p
            className="pagination--pages--item transition-colors cursor-pointer hover:text-mgreen"
            key={index}
          >
            {item}
          </p>
        ))}
      </div>

      <span className="arrow-down transition-colors duration-277 w-5 -rotate-90 fill-gray-400 cursor-pointer hover:fill-mgreen">
        {arrowDownSVG}
      </span>
    </div>
  );
};

export default PaginationComponent;
