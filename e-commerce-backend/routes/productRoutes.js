const express = require("express");
const {
  getProducts,
  getProductById,
  searchProduct,
  filterProductByCategory,
  filterProductByPrice,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { auth, admin } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.get("/search", searchProduct);
router.get("/filter/category/:category", filterProductByCategory);
router.get("/filter/price", filterProductByPrice);
router.post("/", auth, admin, createProduct);
router.put("/:id", auth, admin, updateProduct);
router.delete("/:id", auth, admin, deleteProduct);

module.exports = router;
