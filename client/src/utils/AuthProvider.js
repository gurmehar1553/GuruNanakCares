import React, { useEffect, useState } from 'react'
import { verifyAuth } from '../server'

const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(false)
    const [currUser, setCurrUser] = useState(null)

    const getAuth= async ()=>{
        const {authStatus, user,err} = await verifyAuth()
        console.log('everythins fine')
        console.log(err? err.message : 'no error')
        if(authStatus){
            setAuth(true)
            setCurrUser(user)
        }
        else{
            setCurrUser(null)
        }
        console.log(authStatus)
    }

    useEffect(()=>{
        getAuth()
    },[auth,setCurrUser])

  return (
    <AuthContext.Provider value={{auth,setAuth,currUser,setCurrUser}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
