import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  console.log(cart);

  return (
    <div className="shop-conatiner">
      <div className="products-container">
        {products.map((product) => (
          <Product
            handleAddToCart={handleAddToCart}
            key={product.id}
            product={product}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h4>Order Summary</h4>
        <p>Selected Item: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
