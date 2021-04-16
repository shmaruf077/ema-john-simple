import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  const itemPrice = cart.reduce( (itemPrice, newItemPrice) => itemPrice + newItemPrice.price , 0) ;
  const shippingCharge = cart.reduce( (shippingPrice, newShippingPrice) => shippingPrice + newShippingPrice.shipping ,0) ;
  const subTotal = itemPrice + shippingCharge ;
  const vatAndTax = Math.ceil( subTotal * 0.02 ) ;
  const totalPrice = subTotal + vatAndTax ;
  return (
    <div>
      <div>
        <div className="cart-header">
          <h2 className='text-highlight'>Order Summery </h2>
        </div>
        <div className="cost-count-container">
          <div>
            <h4>Items ordered</h4>
            <p> Items price</p>
            <p> Shiping and Handling</p>
            <p> Subtotal</p>
            <p> Vat & Tax <small>(2%)</small></p>
            <h4>Total Price</h4>
          </div>
          <div className='price-number-container'>
            <p>: <strong> {cart.length} </strong> </p>
            <p>: <strong> {itemPrice} </strong></p>
            <p>: <strong> {shippingCharge} </strong></p>
            <p>: <strong> {subTotal} </strong></p>
            <p>: <strong> {vatAndTax} </strong></p>
            <p>: <strong> {totalPrice} </strong></p>
          </div>
        </div>
        <button className="checkout-btn">Checkout to Order</button>
      </div>
    </div>
  );
};

export default Cart;
