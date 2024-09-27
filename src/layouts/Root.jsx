import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navber from '../Pages/Shared/Navber/Navber';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto font-poppins'>
           <Navber></Navber>
            <Outlet></Outlet>
            <div className='mt-32'><Footer></Footer></div>
            
        </div>
    );
};

export default Root;