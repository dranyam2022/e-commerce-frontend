import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul>
      <li>
        <Link to="/" exact>
          Home
        </Link>
      </li>
      <li>
        <Link to="/shopall" exact>
          Shop All
        </Link>
      </li>
      <li>
        <Link to="/mobilephones" exact>
          Mobile Phones
        </Link>
      </li>
      <li>
        <Link to="/tablets" exact>
          Tablets
        </Link>
      </li>
      <li>
        <Link to="/accessories" exact>
          Accessories
        </Link>
      </li>
      <li>
        <Link to="/contactus" exact>
          Contact Us
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
