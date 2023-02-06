import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styles from './LoginLink.module.css'

function LoginLink() {
  return (
    <Link to='#' className={styles.loginlink__container}>
      <FaUserCircle />
      <div>Login</div>
    </Link>
  )
}

export default LoginLink