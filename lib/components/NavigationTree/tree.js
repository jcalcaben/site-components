import React from 'react'
import PropTypes from 'prop-types'

import Leaf from './leaf'

const Branch = props => {
    const { label, url, pages } = props;

    const branches = pages.map(branch => {
        const { branchLabel, branchUrl, pages: childPages } = branch;
        return <Branch key={branchLabel} label={branchLabel} url={branchUrl} pages={childPages} />
    })

    return (
      <li>
        <Leaf label={label} url={url} />
        {branches}
      </li>
    )

}

Branch.propTypes = {
    label: PropTypes.string,
    url: PropTypes.string,
    pages: PropTypes.array
}

const Tree = props => {
    const { pages } = props;

    const branches = pages.map(branch => {
        const { label, url, pages: childPages } = branch;
        return <Branch key={label} label={label} url={url} pages={childPages} />
    })

    return <ul>{branches}</ul>
}

Tree.propTypes = {
    pages: PropTypes.array
}

export default Tree;