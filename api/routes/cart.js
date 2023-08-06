const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");

const {
  createCart,
  getAllCart,
  getUserCart,
  updateCart,
  deleteCart,
} = require("../controllers/cart");

router
  .post("/", verifyToken, createCart)
  .get("/", verifyTokenAndAdmin, getAllCart);
router.get("/find/:userId", verifyTokenAndAuthorization, getUserCart);
router
  .put("/:id", verifyTokenAndAuthorization, updateCart)
  .delete("/:id", verifyTokenAndAuthorization, deleteCart);

module.exports = router;
