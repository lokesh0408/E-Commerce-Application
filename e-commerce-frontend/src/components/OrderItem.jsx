// src/components/OrderItem.jsx

import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const OrderItem = ({ order }) => {
  return (
    <div>
      <h2>Order #{order._id}</h2>
      <p>Status: {order.status}</p>
      <p>Total Amount: ${order.totalAmount}</p>
      <p>Placed on: {moment(order.createdAt).format("LLL")}</p>
      <Link to={`/orders/${order._id}`}>View Details</Link>
    </div>
  );
};

export default OrderItem;
