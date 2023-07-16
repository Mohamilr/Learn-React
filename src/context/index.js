import React, { createContext, useReducer } from "react";
import { dataReducer, initialDataState } from "./reducer";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [data, dispatchData] = useReducer(dataReducer, initialDataState);

  return (
    <AppContext.Provider value={[data, dispatchData]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
