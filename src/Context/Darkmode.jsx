import React, { createContext } from "react";

const DarkModeContext = createContext(null)

const DarkModeProvider = ({ children, value }) => {

    return (
        <DarkModeContext.Provider value={value}>
            {children}
        </DarkModeContext.Provider>
    )
}

export { DarkModeContext, DarkModeProvider }