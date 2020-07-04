import React from 'react';
import PropTypes from 'prop-types'

import defaultStyles from './leaf.module.css';

const Leaf = props => {
    const {label, url, getLinkComponent} = props;

    if(url && getLinkComponent){
        const link = getLinkComponent({label, url});
        return link;
    }

    return <span className={defaultStyles.labelOnly}>{label}</span>

}

Leaf.propTypes = {
    label: PropTypes.string,
    url: PropTypes.string,
    getLinkComponent: PropTypes.func,
}

export default Leaf