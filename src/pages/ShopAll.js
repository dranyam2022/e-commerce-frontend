import React from "react";
import { Link } from "react-router-dom";

const ShopAll = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/product-details/:productId">Product 1</Link>
        </li>
        <li>
          <Link to="/">Product 2</Link>
        </li>
        <li>
          <Link to="/">Product 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default ShopAll;
