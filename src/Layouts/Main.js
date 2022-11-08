import React from "react";
import { Outlet } from "react-router-dom";
import Headers from "../Pages/Shared/Headers";

const Main = () => {
  return (
    <>
      <Headers />
      <Outlet />
    </>
  );
};

export default Main;
