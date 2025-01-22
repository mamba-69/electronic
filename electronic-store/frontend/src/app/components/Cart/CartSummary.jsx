import React from "react";

const CartSummary = ({ items }) => {
  const total = items?.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      <div className="summary-details">
        <p>Total Items: {items?.length}</p>
        <p>Total Amount: ${total?.toFixed(2)}</p>
      </div>
      <button className="checkout-btn">Proceed to Checkout</button>
    </div>
  );
};

export default CartSummary;