import classNames from "classnames";
import React from "react";

interface Props {
  id: number;
  selectedWeight: number;
  weightHandler: (weight: number) => void;
  largeFont?: boolean
}

const WeightComponent = ({ weightHandler, ...props }: Props) => {
  return (
    <div className="home-buy-card--weight flex gap-1">
      {[200, 400, 800, 1000].map((item, index) => (
        <div
          className={classNames(
            "home-buy-card--weight-item grow text-center text-gray-500 rounded cursor-pointer",
            {
              "ring-1 ring-mgreen": props.selectedWeight === item,
              "text-xl py-1": props.largeFont,
              "text-lg": !props.largeFont
            }
          )}
          key={index}
          onClick={(e) => weightHandler(item)}
        >
          <input type="radio" name={`weight-seeds-${props.id}`} id={`weight-seeds-${item}-${props.id}`} value={item} hidden />
          <label htmlFor={`weight-seeds-${item}-${props.id}`} className="cursor-pointer">
            {item < 1000 ? `${item} г.` : `${(item / 1000).toFixed(0)} кг.`}
          </label>
        </div>
      ))}
    </div>
  );
};

export default WeightComponent;
