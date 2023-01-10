import React from "react";
import styles from "./NavBar.module.css";
import LoginLink from "./LoginLink";
import CartLink from "./CartLink";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import Logo from "../logo/Logo";

function Nav() {
  return (
    <nav id="nav">
      <div className={styles.nav__container}>
        <Logo />
        <Navigation />
        <MobileNavigation />
        <div className={styles.loginlinks__container}>
          <LoginLink />
          <CartLink />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
