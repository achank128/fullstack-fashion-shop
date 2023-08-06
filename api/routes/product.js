const router = require("express").Router();
const Product = require("../models/Product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");
const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProsuct,
} = require("../controllers/product");

router.post("/", verifyTokenAndAdmin, createProduct);

router.get("/", getProducts);

router.get("/find/:id", getProduct);

router
  .put("/:id", verifyTokenAndAdmin, updateProduct)
  .delete("/:id", verifyTokenAndAdmin, deleteProsuct);

module.exports = router;
