/* eslint-disable react-refresh/only-export-components */
import React, { createContext } from 'react';

export const ConfigContext = createContext();

export const ContextProvider = ({children}) => {
    const test = "2";
    const values ={ test }
    return (
        <div>
           <ConfigContext.Provider value={values}>{children}</ConfigContext.Provider> 
        </div>
    );
}