import React from "react";
import PropTypes from "prop-types";

import { storiesOf } from "@storybook/react";

import Leaf from "../leaf";
import Branch from "../branch";

const Link = (props) => {
  const { url, label } = props;
  return <a href={url}>{label}</a>;
};

Link.propTypes = {
  url: PropTypes.string,
  label: PropTypes.string,
};

const stories = storiesOf("Components/Navigation Tree");

stories.add("Leaf with no link", () => {
  return <Leaf label="Leaf Label" renderLink={Link} />;
});

stories.add("Leaf with link", () => {
  return <Leaf label="Leaf Label" url="/url/path" getLinkComponent={Link} />;
});

stories.add("Branch", () => {
  const data = {
    label: "Section 1",
    url: "/section-1",
    pages: [
      {
        label: "Section 1.1",
        url: "/section-1-1",
      },
      {
        label: "Section 1.2",
        url: "/section-1-2",
      },
      {
        label: "Section 1.3",
        url: "/section-1-3",
      },
    ],
  };

  return <Branch getLinkComponent={Link} {...data} />;
});
