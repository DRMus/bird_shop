import classNames from "classnames";
import React from "react";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  content: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ onClick, ...props }: Props) => {
  return (
    <button
      type={props.type || "button"}
      className={classNames(
        "w-fit text-lg text-white rounded-md bg-mgreen transition-colors hover:bg-mstronggreen active:bg-mgreen",
        { "px-8 py-2": !props.className },
        props.className
      )}
      onClick={onClick}
    >
      {props.content}
    </button>
  );
};

export default Button;
