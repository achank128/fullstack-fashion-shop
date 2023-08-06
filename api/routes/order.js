const router = require("express").Router();
const Order = require("../models/Order");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");

const {
  getAllOrder,
  getUserOrder,
  getOrderMonthlyIncome,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/order");

router
  .post("/", verifyToken, createOrder)
  .get("/", verifyTokenAndAdmin, getAllOrder);
router.get("/income", verifyTokenAndAdmin, getOrderMonthlyIncome);
router.get("/find/:userId", verifyTokenAndAuthorization, getUserOrder);
router
  .put("/:id", verifyTokenAndAdmin, updateOrder)
  .delete("/:id", verifyTokenAndAdmin, deleteOrder);

module.exports = router;
