import React, { useState, createContext, useContext } from "react";

const AppContext = createContext();

const AppContextProvider = (props) => {
  const { children } = props;

  const [activePanel, setActivePanel] = useState();

  const state = { activePanel: activePanel };
  const api = {};

  const value = [state, api];

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;

export const useAppContext = () => useContext(AppContext);
