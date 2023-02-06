import React from 'react'
import styles from './Navigation.module.css'
import NavLinks from './NavLinks'

function Navigation() {
  return (
    <div className={styles.navigation}>
      <NavLinks />
    </div>
  )
}

export default Navigation