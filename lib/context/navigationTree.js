import React, { useState, createContext, useContext } from 'react'
import PropTypes from 'prop-types';

const NavigationTreeContext = createContext();

const NavigationTreeContextProvider = (props) => {
    const { children, data } = props;

    const [openSections, setOpenSections] = useState([]);

    const state = {
        data,
        openSections
    }

    const openSection = id => {
        if (openSections.indexOf(id) < 0) {
            setOpenSections(current => [id, ...current]);
        }
    }

    const api = {
        openSection
    }

    const value = [state, api];

    return <NavigationTreeContext.Provider value={value}>{children}</NavigationTreeContext.Provider>
}

NavigationTreeContextProvider.propTypes = {
    children: PropTypes.element,
    data: PropTypes.object
};

export default NavigationTreeContextProvider;

export const useNavigationTreeContext = () => useContext(NavigationTreeContext);