import React from "react";
// import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Head from "../Hed/Head";

function MainLayout() {
  return (
    <>
      <Head />
      <Outlet />
      <ScrollRestoration />
      <Footer />
    </>
  );
}

export default MainLayout;
