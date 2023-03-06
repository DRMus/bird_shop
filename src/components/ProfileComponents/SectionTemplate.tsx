import classNames from "classnames";
import React from "react";

interface Props {
  children: React.ReactNode;
  header: string;
  classNameMain?: string;
  classNameChildren?: string;
}

const SectionTemplate = ({ children, ...props }: Props) => {
  return (
    <div className={"profile-section flex flex-col gap-2 " + (props.classNameMain || "")}>
      <h3 className="profile-section--header text-mshadowgray text-lg">{props.header}</h3>
      <div
        className={
          props.classNameChildren
            ? `shadow-xl bg-white rounded-xl ${props.classNameChildren}`
            : "shadow-xl bg-white rounded-xl px-8 py-6"
        }
      >
        {children}
      </div>
    </div>
  );
};

export default SectionTemplate;
