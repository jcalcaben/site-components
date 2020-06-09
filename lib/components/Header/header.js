import React from 'react'

import Actions from './actions'
import Navigation from './navigation'

import defaultClasses from './header.module.css'

const Header = props => {

    const { onNavigationClick, onOverflowClick, onSearchClick, children } = props;

    return (
        <header className={defaultClasses.root}>
            <Navigation clickAction={onNavigationClick} />
            {children}
            <Actions onOverflowClick={onOverflowClick} onSearchClick={onSearchClick} />
        </header>
    )

}

export default Header;