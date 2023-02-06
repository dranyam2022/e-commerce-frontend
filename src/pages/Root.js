import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/nav/NavBar";

const RootLayout = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Outlet />
    </React.Fragment>
  );
};

export default RootLayout;
