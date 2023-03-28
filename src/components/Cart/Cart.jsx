import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  // const cart = props. cart; -- OPTION: 1
  //   const { cart } = props; -- OPTION: 2

  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalPrice + product.shipping;
  }

  const tax = (totalPrice * 7) / 100;

  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Item: {cart.length}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Shipping: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
