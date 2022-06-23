const express = require("express");
const {
  getMe,
  login,
  createAccount,
  protect,
  checkRole,
  getAllUsers,
} = require("../controllers/authController");

const router = express.Router();

router.route("/login").post(login);

router.route("/signup").post(createAccount);

router.route("/me").get(protect, getMe);

router.route("/").get(protect, checkRole("admin"), getAllUsers);

module.exports = router;
