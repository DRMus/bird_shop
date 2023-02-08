import { createContext, ReactNode, useState } from "react";
import { IBreadCrumb } from "../interfaces";

interface Props {
  children: ReactNode;
}

interface Context {
  breadCrumbs: IBreadCrumb[];
  changeBreadCrumbs: (page: string, level: number) => void;
}

export const GlobalContextValue = createContext<Context>({
  breadCrumbs: [],
  changeBreadCrumbs: () => {},
});

function GlobalContext({ children }: Props) {
  const [breadCrumbs, setBreadCrumbs] = useState<IBreadCrumb[]>([
    { crumb: "Каталог", page: "catalog" },
  ]);

  const changeBreadCrumbs = (page: string, level: number) => {
    let slicedArray: IBreadCrumb[] = breadCrumbs.slice(0, level);
    let crumb: IBreadCrumb = {crumb: page, page: page}
    slicedArray.push(crumb);
    setBreadCrumbs(slicedArray);
  };

  return (
    <GlobalContextValue.Provider
      value={{
        breadCrumbs,
        changeBreadCrumbs,
      }}
    >
      {children}
    </GlobalContextValue.Provider>
  );
}

export default GlobalContext;
