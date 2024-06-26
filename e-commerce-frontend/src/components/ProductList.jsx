// src/components/ProductList.jsx

// Import necessary libraries and hooks
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { Link } from "react-router-dom";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  // Fetch products when the component is mounted
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  // Handle loading, error, and display product list states
  let content;
  if (status === "loading") {
    content = <p>Loading...</p>;
  } else if (status === "succeeded") {
    content = (
      <ul>
        {Array.isArray(products) &&
          products.map((product) => (
            <li key={product._id}>
              <Link to={`/products/${product._id}`}>{product.name}</Link>
            </li>
          ))}
      </ul>
    );
  } else if (status === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <div>
      <h1>Products</h1>
      {content}
    </div>
  );
};

export default ProductList;
