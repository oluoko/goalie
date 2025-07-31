const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [
        true,
        "First name is required. Please provide your first name.",
      ],
      minlength: [3, "First name must be at least 3 characters long."],
    },
    lastName: {
      type: String,
      required: [
        false,
        "Last name is optional. Provide your last name if you wish.",
      ],
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
