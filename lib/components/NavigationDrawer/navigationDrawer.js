import React from "react";
import PropTypes from "prop-types";

import NavigationHeader from "./navigationHeader";

import defaultStyles from "./navigationDrawer.module.css";

const NavigationDrawer = (props) => {
    const { active } = props;

    const classes = {
        ...defaultStyles,
        container: active ? defaultStyles.rootActive : defaultStyles.rootHidden,
    };

    return (
      <div className={classes.container}>
        <NavigationHeader />
        <hr className={classes.divider} />
        <span>Navigation</span>
      </div>
    );
};

NavigationDrawer.propTypes = {
    active: PropTypes.bool.isRequired,
};

export default NavigationDrawer;
