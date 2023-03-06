import React from "react";
import ReactDOM from "react-dom";

interface Props {
  children: React.ReactNode;
}

const EditUserComponent = ({ children, ...props }: Props) => {
  return ReactDOM.createPortal(
    <div className="animation-opacity bg-mgreen/50 fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center">
      <div className="drop-down">{children}</div>
    </div>,
    document.body
  );
};

export default EditUserComponent;
