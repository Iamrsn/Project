const express = require("express");
const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).json({ message: "succesful", success: true });
  } catch (error) {
    console.log(error);
  }
};

//Registration Logic
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "email already exist" });
    }

    //hash password
    // const salt = 10;
    // const hash_password = await bcrypt.hash(password, salt);

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });
    res
      .status(201)
      .json({
        message: "registartion sucessful",
        token: await userCreated.generateToken(),
        userId: userCreated._id.toString(),
      });
  } catch (error) {
    res.status(500).json({message:"internal server error in register"})
  }
};

const login = async (req,res)=>{
try {
    const {email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const user = await userExist.comparePassword(password)
    if(user){
        res
        .status(200)
        .json({
          message: "Login sucessful",
          token: await userExist.generateToken(),
          userId: userExist._id.toString(),
        });
    }
    else{
        res.status(401).json({message:"Ivalid email or password"})
    }
} catch (error) {
    res.status(500).json({message:"internal server error in login"})
}
}

module.exports = { home, register ,login};
