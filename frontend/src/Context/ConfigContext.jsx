/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from 'react';

export const ConfigContext = createContext();

export const ContextProvider = ({children}) => {
    const apiUrl = "http://localhost:3002/";
    const [user, setUser] = useState(localStorage.getItem("username"));
    const values ={ apiUrl, user, setUser }
    return (
        <div>
           <ConfigContext.Provider value={values}>{children}</ConfigContext.Provider> 
        </div>
    );
}