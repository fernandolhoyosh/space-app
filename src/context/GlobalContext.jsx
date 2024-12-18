import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({children}) => {
  return (
    <GlobalContext.Provider>
        {children}
    </GlobalContext.Provider>
  )
}

export {GlobalContext, GlobalContextProvider}