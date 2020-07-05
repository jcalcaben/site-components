import React from "react";
import PropTypes from "prop-types";

import Branch from "./branch";

const Tree = (props) => {
  const { pages } = props;

  const branches = pages.map((branch) => {
    const { label, url, pages: childPages } = branch;
    return <Branch key={label} label={label} url={url} pages={childPages} />;
  });

  return <ul>{branches}</ul>;
};

Tree.propTypes = {
  pages: PropTypes.array,
};

export default Tree;
