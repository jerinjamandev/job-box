import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Authcontext } from '../provider/Authprovider';

const Privetroute = ({children}) => {
  const {user,loading}=useContext(Authcontext)

  if(loading){
    return(
        <div className='flex flex-col items-center min-h-screen'>
            <span className="loading loading-dots loading-xl"></span>
        </div>
    )
  }
  if(!user){
    return(
        <Navigate to='/login' replace={true}></Navigate>
    )
  }

  return children

};

export default Privetroute;