import { createContext, useState } from "react";

export const ContextGlobal = createContext();

/* eslint-disable react/prop-types */
export const ContextProvider = ( { children } ) => {
    const [errorMessage, setErrorMessage] = useState(null)

    const [username, setUsername] = useState("")

    const [password, setPassword] = useState("")

    const [user, setUser] = useState(null)

    const values = {
        errorMessage, 
        setErrorMessage,
        username,
        setUsername,
        password,
        setPassword,
        user,
        setUser,
    }

    return (
        <ContextGlobal.Provider value={values}>
            {children}
        </ContextGlobal.Provider>
    )
}
