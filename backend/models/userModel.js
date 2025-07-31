const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [
        true,
        "First name is required. Please provide your first name.",
      ],
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is required. Please provide your email."],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required. Please provide your password."],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
