import PropTypes from "prop-types";
import React, { useState, createContext, useContext } from "react";

const AppContext = createContext();

const AppContextProvider = (props) => {
  const { children } = props;

  const [activePanel, setActivePanel] = useState();

  const state = { activePanel };
  const api = {
    setActivePanel,
  };

  const value = [state, api];

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
  children: PropTypes.element,
};

export default AppContextProvider;

export const useAppContext = () => useContext(AppContext);
