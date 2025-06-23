import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Footrer from '../Components/Footrer';
import DocumentTitle from '../Hook/DocumentTitle';

const Root = () => {
    return (
        <div className='overscroll-x-none'>
             <DocumentTitle title='Job Box'></DocumentTitle>
            <NavBar></NavBar>
           <div className='min-h-screen'>
           <Outlet></Outlet>
           </div>
           <Footrer></Footrer>
        </div>
    );
};

export default Root;