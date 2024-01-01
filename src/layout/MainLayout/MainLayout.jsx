import React from "react";
// import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Head from "../Hed/Head";
// import Header from "../Header/h2/Header";

function MainLayout() {
  return (
    <>
      {/* <Header /> */}
      {/* <Header /> */}


      <Head />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
