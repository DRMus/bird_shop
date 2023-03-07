import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import classNames from "classnames";
import React from "react";

interface Props {
  selectedCount: number;
  smallSize?: boolean;
  changeCount: (operation: "-" | "+") => void;
}

const ProductCounter = ({ changeCount, ...props }: Props) => {
  return (
    <div
      className={classNames("flex flex-col", {
        "gap-3": !props.smallSize,
        "gap-1": props.smallSize,
      })}
    >
      <p
        className={classNames("text-mshadowgray", {
          "text-lg": !props.smallSize,
          "text-sm text-center": props.smallSize,
        })}
      >
        Количество:
      </p>
      <div
        className={classNames("flex items-center", {
          "gap-5": !props.smallSize,
          "gap-3": props.smallSize,
        })}
      >
        <button
          className="text-mgreen border border-mgreen rounded flex justify-center items-center p-1.5"
          onClick={(e) => changeCount("-")}
        >
          <MinusOutlined
            className={classNames({ "w-3": !props.smallSize, "w-2.5 h-2.5": props.smallSize })}
          />
        </button>
        <p className={classNames({ "text-2xl": !props.smallSize, "text-lg": props.smallSize })}>
          {props.selectedCount}
        </p>
        <button
          className="text-mgreen border border-mgreen rounded flex justify-center items-center p-1.5"
          onClick={(e) => changeCount("+")}
        >
          <PlusOutlined
            className={classNames({ "w-3": !props.smallSize, "w-2.5 h-2.5": props.smallSize })}
          />
        </button>
      </div>
    </div>
  );
};

export default ProductCounter;
