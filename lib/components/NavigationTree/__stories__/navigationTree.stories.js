import React from 'react';
import PropTypes from 'prop-types'

import { storiesOf } from "@storybook/react"

import Leaf from '../leaf'

const Link =  props => {
    const { url, label } = props;
    return <a href={url}>{label}</a>
}

Link.propTypes = {
    url: PropTypes.string,
    label: PropTypes.string
}

const stories = storiesOf("Components/Navigation Tree");

stories.add("Leaf with no link", ()=> {
    return <Leaf label="Leaf Label" renderLink={Link} />

})

stories.add("Leaf with link", ()=> {
    return <Leaf label="Leaf Label" url="/url/path" getLinkComponent={Link} />

})