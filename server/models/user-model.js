const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

//save ek method hai  or pre mtlb database me save krne se phele ye run hoga tab db me save hoga or ye ek middleware hai..
userSchema.pre("save", async function (next) {
  //console.log("pre",this);
  const user = this;
  if (!user.isModified("password")) {
    next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, salt);
    user.password = hash_password;
  } catch (error) {
    next(error);
  }
});

userSchema.methods.comparePassword = async function(password){
   return await bcrypt.compare(password,this.password)
}

//jwt

userSchema.methods.generateToken = async function () {
  //return islie kr rhe kuki waha use kr sake ham controller me generate token wala fn
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "30d" }
    );
  } catch (error) {
    console.error("jwt error", error);
  }
};

const User = new mongoose.model("User", userSchema);
module.exports = User;
