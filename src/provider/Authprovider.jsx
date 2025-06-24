import { onAuthStateChanged, signOut } from '@firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { auth } from '../firebase.init';

export const Authcontext= createContext()

const Authprovider = ({children}) => {

    const[user,setuser]=useState(null)
    const[loading,setloading]=useState(true)

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentuser=>{
            console.log(currentuser);
            setuser(currentuser);
            setloading(false);
        })

        return ()=>unsubscribe()
    },[])

    const logout=()=>{
        setloading(true)
        console.log('logout');
        return signOut(auth)
    }
    
    const authinfo={user,loading,logout}


    return (
         <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;