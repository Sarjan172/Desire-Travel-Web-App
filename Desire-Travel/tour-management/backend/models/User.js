import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
      required: false,
    },

    role: {
      type: String,
      default: "user",
    },
    resetPasswordToken: {
      type: String,
    },
    resetPasswordTime: Date,
  },

  { timestamps: true },

);

// Forgot password method for user schema.
userSchema.methods.getResetToken = function () {
  // Generating a random token.
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hashing and setting the reset password token on the user schema.
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Setting a time limit for the token to be valid.
  this.resetPasswordTime = Date.now() + 15 * 60 * 1000;

  // Returning the reset token to be used in the password reset process.
  return resetToken;
};

export default mongoose.model("User", userSchema);
