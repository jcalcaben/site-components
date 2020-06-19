import PropTypes from "prop-types";

import React from "react";

import AppContextProvider from "../../context/app";

const App = (props) => {
  const { children } = props;

  return <AppContextProvider>{children}</AppContextProvider>;
};

App.propTypes = {
  children: PropTypes.element,
};

export default App;
