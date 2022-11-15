import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import styles from './LoginLink.module.css'

function LoginLink() {
  return (
    <a href='#' className={styles.loginlink__container}>
      <FaUserCircle />
      <div>Login</div>
    </a>
  )
}

export default LoginLink