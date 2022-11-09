import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer";
import Headers from "../Pages/Shared/Headers";

const Main = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
