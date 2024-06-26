// routes/orderRoutes.js

const express = require("express");
const router = express.Router();
const { auth, admin } = require("../middleware/authMiddleware");
const {
  createOrder,
  getOrders,
  getOrderById,
  updateOrderStatus,
} = require("../controllers/orderController");

router.post("/", auth, createOrder);
router.get("/", auth, getOrders);
router.get("/:id", auth, getOrderById);
router.put("/:id", auth, admin, updateOrderStatus);

module.exports = router;
