const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/authMiddleware");
const {
  createOrder,
  getOrders,
  getOrderById,
} = require("../controllers/orderController");

router.post("/", auth, createOrder);
router.get("/", auth, getOrders);
router.get("/:id", auth, getOrderById);

module.exports = router;
