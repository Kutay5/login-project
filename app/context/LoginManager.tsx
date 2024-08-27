'use client'

import { createContext, useContext, useState } from 'react'

type user = {
    name: string,
    email: string
}

const defaultUser = {
    name: '',
    email: ''
}

const LoginManagerContext = createContext({
    user: '',
    error: {
        message: ''
    },
    setError: (user: any) => { },
    logIn: (email: string, password: string) => {}
})

export const LoginManagerProvider = ({ children }: any) => {
    const [user, setUser] = useState(defaultUser.email)
    const [error, setError] = useState({
        message: ''
    })

    const logIn = (email: string, password: string) => {
        // log in methods will be here
        setUser('Jack')
    }


    return <LoginManagerContext.Provider value={{
        user,
        setError,
        logIn,
        error
    }}>
        {children}
    </LoginManagerContext.Provider>
}

export const useLoginManagerContext = () => useContext(LoginManagerContext)