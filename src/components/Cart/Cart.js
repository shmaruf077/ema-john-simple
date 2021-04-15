import React from "react";

const Cart = (props) => {
    const cart = props.cart
  return (
    <div>
      <h2>Order Summery </h2>
      <h5>Items ordered: {cart.length} </h5>
    </div>
  );
};

export default Cart;
