import React from "react";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

import defaultClasses from "./actions.module.css";

const Actions = (props) => {
  const { onSearchClick, onOverflowClick } = props;
  return (
    <section className={defaultClasses.root}>
      <button className={defaultClasses.searchButton} onClick={onSearchClick}>
        <SearchIcon
          fontSize={"large"}
          classes={{ root: defaultClasses.searchIcon }}
        />
      </button>
      <button className={defaultClasses.moreButton} onClick={onOverflowClick}>
        <MoreVertIcon
          fontSize={"large"}
          classes={{ root: defaultClasses.moreIcon }}
        />
      </button>
    </section>
  );
};

export default Actions;
