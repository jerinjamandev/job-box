import React, {  createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { auth } from '../firebase.config';

export const AuthContext= createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const provider = new GoogleAuthProvider();


    const googleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const logout = () => {
        return signOut(auth)
    };
    


    const createAccount = (email, password, name, photoURL) => {
        setLoading(true)
        return  createUserWithEmailAndPassword(auth, email, password)
        .then(({ user }) =>
          updateProfile(user, { displayName: name, photoURL }).then(() => {
            setUser({ ...user, displayName: name, photoURL });
          })
        );
      };

      const LoginUser=(email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
      }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser);
          setLoading(false);
          console.log(currentUser);
        });
        return () => unsubscribe();
      }, []);

    const authInfo={
        user,
        loading,
        googleLogin,
        logout,
        createAccount,
        LoginUser,
        setUser
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;