import React, { useState } from 'react'
import styles from './MobileNavigation.module.css'
import NavLinks from './NavLinks'
import { BiMenu } from 'react-icons/bi'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuClickHandler = () => {
    setIsOpen(!isOpen);
  }
  return (

    <>
      {isOpen
        ?
        <>
          <AiOutlineCloseCircle className={styles.close} onClick={menuClickHandler} />
          <div className={styles.mobilenav__links}>
            <NavLinks />
          </div>
        </>
        :
        <BiMenu className={styles.menu} onClick={menuClickHandler} />
      }


    </>

  )
}

export default MobileNavigation