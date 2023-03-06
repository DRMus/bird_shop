import React, { useEffect } from "react";
import ModalWindowComponent from "../../components/TemplatesComponents/ModalWindowComponent";

interface Props {
  children: React.ReactNode;
}

const ModalWindow = ({ children, ...props }: Props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return <ModalWindowComponent>{children}</ModalWindowComponent>;
};

export default ModalWindow;
