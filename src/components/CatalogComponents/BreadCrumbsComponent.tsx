import { useContext } from "react";
import { GlobalContextValue } from "../../context/GlobalContext";

const BreadCrumbsComponent = () => {
  const { breadCrumbs } = useContext(GlobalContextValue);
  return (
    <>
      {breadCrumbs.map((item, index) => (
        <div className="bread-crumbs--item flex gap-3.5 items-center" key={index}>
          <p className="bread-crumbs--name text-lg text-mshadowgray">{item.crumb}</p>
          {index !== breadCrumbs.length - 1 && (
            <div className="bread-crumbs--separator w-1.5 h-1.5 rounded-full bg-mshadowgray" />
          )}
        </div>
      ))}
    </>
  );
};

export default BreadCrumbsComponent;
