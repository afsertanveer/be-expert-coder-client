import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Main = () => {
    return (
      <div>
        <Header></Header>
        <div className="container-lg mt-5">
        <Outlet></Outlet>
         <Footer></Footer>
        </div>
      </div>
    );
};

export default Main;