import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./CartLink.module.css";

function CartLink() {
  return (
    <Link to="#" className={styles.cartlink__container}>
      <FaShoppingCart />
      <div>Cart</div>
    </Link>
  );
}

export default CartLink;
