import { Schema, model, models } from "mongoose";
import validator from "validator";
import { hash } from "bcryptjs";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minlength: [8, "Password must be 8 characters minimum"],
    select: false,
  },
  cpassword: {
    type: String,
    require: [true, "Please confirm your password"],
    validate: {
      validator: function (el) {
        return this.password === el;
      },
      message: "Password does not match",
    },
  },
});

userSchema.pre("save", async function (next) {
  this.password = await hash(this.password, 12);

  this.cpassword = undefined;

  next();
});

const Users = models.user || model("user", userSchema);

export default Users;
