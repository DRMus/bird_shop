import { useContext } from "react";
import { useSelector } from "react-redux";
import { GlobalContextValue } from "../../context/GlobalContext";
import { IRootReduser } from "../../redux";

const BreadCrumbsComponent = () => {
  const breadCrumbs = useSelector<IRootReduser, string[]>((state) => state.breadCrumbs.breadCrumbs);
  return (
    <>
      {breadCrumbs.map((item, index) => (
        <div className="bread-crumbs--item flex gap-3.5 items-center" key={index}>
          <p className="bread-crumbs--name text-lg text-mshadowgray">{item}</p>
          {index !== breadCrumbs.length - 1 && (
            <div className="bread-crumbs--separator w-1.5 h-1.5 rounded-full bg-mshadowgray" />
          )}
        </div>
      ))}
    </>
  );
};

export default BreadCrumbsComponent;
