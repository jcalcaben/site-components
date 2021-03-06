import PropTypes from "prop-types";
import React from "react";

import Actions from "./actions";
import Navigation from "./navigation";

import defaultClasses from "./header.module.css";

const Header = (props) => {
  const { onNavigationClick, onOverflowClick, onSearchClick, children } = props;

  return (
    <header className={defaultClasses.root}>
      <Navigation clickAction={onNavigationClick} />
      {children}
      <Actions
        onOverflowClick={onOverflowClick}
        onSearchClick={onSearchClick}
      />
    </header>
  );
};

Header.propTypes = {
  onNavigationClick: PropTypes.func,
  onOverflowClick: PropTypes.func,
  onSearchClick: PropTypes.func,
  children: PropTypes.element,
};

export default Header;
