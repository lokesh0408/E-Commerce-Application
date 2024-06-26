// src/components/OrderDetails.jsx

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOrders } from "../store/orderSlice";
import moment from "moment";

const OrderDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const order = useSelector((state) =>
    state.orders.items.find((order) => order._id === id)
  );
  const orderStatus = useSelector((state) => state.orders.status);

  useEffect(() => {
    if (!order) {
      dispatch(fetchOrders());
    }
  }, [order, dispatch]);

  if (orderStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (!order) {
    return <div>Order not found</div>;
  }

  return (
    <div>
      <h1>Order #{order._id}</h1>
      <p>Status: {order.status}</p>
      <p>Total Amount: ${order.totalAmount}</p>
      <p>Placed on: {moment(order.createdAt).format("LLL")}</p>
      <h2>Products</h2>
      <ul>
        {order.products.map((product) => (
          <li key={product.productId._id}>
            {product.productId.name} - {product.quantity} x ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderDetails;
