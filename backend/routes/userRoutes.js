const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  updateMe,
  deleteMe,
} = require("../controller/userController");

const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controller/userAdminController");

const { protect, admin } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router
  .get("/me", protect, getMe)
  .put("/me", protect, updateMe)
  .delete("/me", protect, deleteMe);
// Admin routes
router
  .get("/", protect, admin, getAllUsers)
  .get("/:id", protect, admin, getUserById)
  .put("/:id", protect, admin, updateUser)
  .delete("/:id", protect, admin, deleteUser);

module.exports = router;
