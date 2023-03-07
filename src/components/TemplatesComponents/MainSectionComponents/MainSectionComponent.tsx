import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
  header?: string;
}

const CatalogComponent: FC<Props> = ({ children, ...props }) => {
  return (
    <div className="home-sections--catalog flex flex-col gap-6">
      {props.header && <p className="text-mtextgray text-lg">{props.header}</p>}
      <div className="home-sections--catalog--items flex gap-4">
        {children}
        </div>
    </div>
  );
};

export default CatalogComponent;
