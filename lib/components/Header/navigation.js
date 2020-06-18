import React from "react";

import MenuIcon from "@material-ui/icons/Menu";

import defaultClasses from "./navigation.module.css";

const Menu = (props) => {
  const { clickAction } = props;

  return (
    <button className={defaultClasses.root} onClick={clickAction}>
      <MenuIcon fontSize={"large"} classes={{ root: defaultClasses.icon }} />
    </button>
  );
};

export default Menu;
