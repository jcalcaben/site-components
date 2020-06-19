import PropTypes from "prop-types";
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Header from "../header";
import Actions from "../actions";
import Navigation from "../navigation";

import variables from "./variables.module.css";

const Wrapper = ({ children }) => (
  <div className={variables.root}>{children}</div>
);

Wrapper.propTypes = {
  children: PropTypes.element,
};

const stories = storiesOf("Components/Header");

const navClickFunction = action("Navigation clicked");
const overflowClickFunction = action("Overflow clicked");
const searchClickFunction = action("Search clicked");

stories.add("Header", () => (
  <Wrapper>
    <Header
      onNavigationClick={navClickFunction}
      onOverflowClick={overflowClickFunction}
      onSearchClick={searchClickFunction}
    >
      Header Content
    </Header>
  </Wrapper>
));

stories.add("Actions", () => (
  <Wrapper>
    <Actions
      onOverflowClick={overflowClickFunction}
      onSearchClick={searchClickFunction}
    />
  </Wrapper>
));

stories.add("Navigation", () => (
  <Wrapper>
    <Navigation clickAction={navClickFunction} />
  </Wrapper>
));
