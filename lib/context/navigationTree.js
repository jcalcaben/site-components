import React, { useState, createContext, useContext } from "react";
import PropTypes from "prop-types";

import { getPath } from "../util/navigationTree";

const NavigationTreeContext = createContext();

const NavigationTreeContextProvider = (props) => {
  const { children, data } = props;

  const [openSections, setOpenSections] = useState([]);

  const state = {
    data,
    openSections,
  };

  const openSection = (id) => {
    const treePath = getPath(data.pages, id);

    // Prevents duplicate entries
    const newSections = [];

    treePath.forEach((path) => {
      const openSectionsEntry = openSections.find((section) => {
        return section.url === path.url && section.label === path.label;
      });

      if (!openSectionsEntry) {
        newSections.push(path);
      }
    });

    setOpenSections((current) => {
      return [...newSections, ...current];
    });
  };

  const api = {
    openSection,
  };

  const value = [state, api];

  return (
    <NavigationTreeContext.Provider value={value}>
      {children}
    </NavigationTreeContext.Provider>
  );
};

NavigationTreeContextProvider.propTypes = {
  children: PropTypes.element,
  data: PropTypes.object,
};

export default NavigationTreeContextProvider;

export const useNavigationTreeContext = () => useContext(NavigationTreeContext);
