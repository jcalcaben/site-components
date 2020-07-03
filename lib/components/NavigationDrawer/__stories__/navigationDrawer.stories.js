import React from "react";

import { storiesOf } from "@storybook/react";

import NavigationDrawer from "../navigationDrawer";
import NavigationHeader from "../navigationHeader";

const stories = storiesOf("Components/Navigation Drawer");

stories.add("Drawer", () => {
  return <NavigationDrawer active />;
});

stories.add("Header", () => {
  return <NavigationHeader />;
});
