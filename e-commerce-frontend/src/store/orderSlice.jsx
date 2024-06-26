// src/store/orderSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch orders
export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (_, { getState }) => {
    const { auth } = getState();
    const response = await axios.get("/api/orders", {
      headers: { Authorization: `Bearer ${auth.user.token}` },
    });
    return response.data;
  }
);

// Async thunk to create a new order
export const createNewOrder = createAsyncThunk(
  "orders/createOrder",
  async (orderData, { getState }) => {
    const { auth } = getState();
    const response = await axios.post("/api/orders", orderData, {
      headers: { Authorization: `Bearer ${auth.user.token}` },
    });
    return response.data;
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState: { items: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createNewOrder.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default orderSlice.reducer;
