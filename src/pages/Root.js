import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/nav/NavBar";

const RootLayout = () => {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
};

export default RootLayout;
