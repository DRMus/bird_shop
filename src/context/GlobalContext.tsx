import { createContext, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

interface Context {
  
}

export const GlobalContextValue = createContext<Context>({
  
});

function GlobalContext({ children }: Props) {

  return (
    <GlobalContextValue.Provider
      value={{
        
      }}
    >
      {children}
    </GlobalContextValue.Provider>
  );
}

export default GlobalContext;
