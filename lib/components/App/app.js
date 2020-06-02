import React from 'react'

import AppContextProvider from '../../context/app';

const App = props => {

    const { children } = props;

    return <AppContextProvider>{children}</AppContextProvider>

}

export default App;