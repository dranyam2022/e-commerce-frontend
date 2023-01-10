import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavLinks.module.css";

const NavLinks = () => {
  return (
    <ul>
      <li>
        <NavLink activeClassName={styles.active} to="/" end>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={styles.active} to="/shopall">
          Shop All
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={styles.active} to="/mobilephones">
          Mobile Phones
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={styles.active} to="/tablets">
          Tablets
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={styles.active} to="/accessories">
          Accessories
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={styles.active} to="/contactus">
          Contact Us
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
