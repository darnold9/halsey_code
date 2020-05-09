import React from "react";
import "../styles/products.css";

const Products = () => (
  <>
    <title>Product list</title>
    <div class="product-container">
      <div class="product">
        <img alt="Product 1" src="../images/watch-1.jpg" />
        <h2>Product 1</h2>
        <p>Product 1 description</p>
      </div>
      <div class="product">
        <img alt="Product 2" src="../images/watch-2.jpg" />
        <h2>Product 2</h2>
        <p>Product 2 description</p>
      </div>
      <div class="product">
        <img alt="Product 3" src="../images/watch-3.jpg" />
        <h2>Product 3</h2>
        <p>Product 3 description</p>
      </div>
    </div>
  </>
);

export default Products;
