import React from "react";

import { useNavigationTreeContext} from '../../context/navigationTree'

import defaultStyles from "./navigationTree.module.css";

const NavigationTree = () => {
  const [navState, navApi] = useNavigationTreeContext();
  
  const {data, openSections} = navState;

  const {openSection} = navApi;

  return <div className={defaultStyles.root}>Navigation</div>;
};

export default NavigationTree;
