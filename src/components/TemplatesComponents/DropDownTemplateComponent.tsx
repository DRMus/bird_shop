import classNames from "classnames";
import React, { useRef } from "react";
import useOutsideAlerter from "../../utils/useOutsideAlerter";

interface Props {
  children: React.ReactNode;
  className?: string;
  fixedWidth?: boolean;
  stickySide: "left" | "right";
  showElement: (state: boolean) => void;
}

const DropDownTemplateComponent = ({ children, showElement, ...props }: Props) => {
  const dropDownRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(dropDownRef, showElement);
  return (
    <div
      ref={dropDownRef}
      className={classNames(
        `drop-down absolute top-full ${props.stickySide}-0 mt-4 bg-white flex flex-col shadow-xl rounded-xl overflow-hidden z-50`,
        { "w-72": props.fixedWidth },
        props.className
      )}
    >
      {children}
    </div>
  );
};

export default DropDownTemplateComponent;
