import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Homepage/Footer/Footer';

const Main = () => {
  return (
    <div className='host-font'>
      <Outlet></Outlet>
      {/* <Footer/> */}
    </div>
  );
};

export default Main;