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

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", getMe).put("/me", updateMe).delete("/me", deleteMe);
// Admin routes
router
  .get("/", getAllUsers)
  .get("/:id", getUserById)
  .put("/:id", updateUser)
  .delete("/:id", deleteUser);

module.exports = router;
