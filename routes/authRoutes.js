const express = require("express");
const User = require("../models/User");

const {
  getLogin,
  login,
  getRegister,
  register,
  logout,
} = require("../controllers/authController");

const userRoutes = express.Router();

//render login page
userRoutes.get("/login", getLogin);

// Main logic for user login
userRoutes.post("/login", login);

//Render Register page
userRoutes.get("/register", getRegister);

// Main logic for user registration
userRoutes.post("/register", register);
//logout
userRoutes.get("/logout", logout);

module.exports = userRoutes;
