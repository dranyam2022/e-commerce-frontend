import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import styles from './CartLink.module.css'

function CartLink() {
  return (
    <a href='#' className={styles.cartlink__container}>
      <FaShoppingCart />
      <div>Cart</div>
    </a>
  )
}

export default CartLink