const router = require("express").Router();
const User = require("../models/User");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");
const {
  getUser,
  getUserStats,
  getAllUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

router.get("/", verifyTokenAndAdmin, getAllUser);
router.get("/stats", verifyTokenAndAdmin, getUserStats);
router.get("/find/:id", verifyTokenAndAdmin, getUser);
router
  .put("/:id", verifyTokenAndAuthorization, updateUser)
  .delete("/:id", verifyTokenAndAuthorization, deleteUser);

module.exports = router;
