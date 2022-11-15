import React from 'react'
import styles from './NavBar.module.css'
import Logo from '../../assets/logo.png';
import LoginLink from './LoginLink';
import CartLink from './CartLink';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';


function Nav() {
  return (
    <nav id='nav'>
      <div className={styles.nav__container}>
        <div className={styles.nav__img}>
          <img src={Logo} />
        </div>
        <Navigation />
        <MobileNavigation />
        <div className={styles.loginlinks__container}>
          <LoginLink />
          <CartLink />
        </div>
      </div>
    </nav>
  )
}

export default Nav