import React from "react";
import NavBar from "../nav/NavBar";
import SearchBar from "../search/SearchBar";

const Layout = (props) => {
  return (
    <div>
      <NavBar />
      <SearchBar />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
