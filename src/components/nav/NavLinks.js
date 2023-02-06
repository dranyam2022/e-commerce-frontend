import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavLinks.module.css";

const NavLinks = () => {
  const isActive = ({ isActive }) => (isActive ? styles.active : undefined);

  return (
    <ul>
      <li>
        <NavLink to="/" className={isActive} end>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/shopall" className={isActive}>
          Shop All
        </NavLink>
      </li>
      <li>
        <NavLink to="/mobilephones" className={isActive}>
          Mobile Phones
        </NavLink>
      </li>
      <li>
        <NavLink to="/tablets" className={isActive}>
          Tablets
        </NavLink>
      </li>
      <li>
        <NavLink to="/accessories" className={isActive}>
          Accessories
        </NavLink>
      </li>
      <li>
        <NavLink to="/contactus" className={isActive}>
          Contact Us
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
