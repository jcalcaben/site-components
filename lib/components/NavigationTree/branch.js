import React from "react";
import PropTypes from "prop-types";

import Leaf from "./leaf";

const Branch = (props) => {
  const { label, url, pages, getLinkComponent } = props;

  const branches = pages
    ? pages.map((branch) => {
        const {
          label: branchLabel,
          url: branchUrl,
          pages: childPages,
        } = branch;
        return (
          <Branch
            key={branchLabel}
            label={branchLabel}
            url={branchUrl}
            pages={childPages}
            getLinkComponent={getLinkComponent}
          />
        );
      })
    : undefined;

  return (
    <li>
      <Leaf label={label} url={url} getLinkComponent={getLinkComponent} />
      {branches ? <ul>{branches}</ul> : undefined}
    </li>
  );
};

Branch.propTypes = {
  label: PropTypes.string,
  url: PropTypes.string,
  pages: PropTypes.array,
  getLinkComponent: PropTypes.func,
};

export default Branch;
