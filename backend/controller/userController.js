const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc       Register a new user
// @route     POST /api/users
// @access   Public
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User registered successfully" });
});

// @desc    Authenticate a user
// @route  POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User logged in successfully" });
});

// @desc    Get user data
// @route  GET /api/users/me
// @access Private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User data retrieved successfully" });
});

// @desc    Update my profile
// @route  PUT /api/users/me
// @access Private
const updateMe = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User profile updated successfully" });
});

// @desc   Delete my profile
// @route  DELETE /api/users/me
// @access Private
const deleteMe = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User profile deleted successfully" });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
  updateMe,
  deleteMe,
};
