import React from "react";

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={item?.image} alt={item?.name} />
      <div className="item-details">
        <h3>{item?.name}</h3>
        <p>Price: ${item?.price}</p>
        <p>Quantity: {item?.quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;