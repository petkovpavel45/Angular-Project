const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const secret = "q-90234xcwmietvuselrg";

const tokenBlacklist = new Set();

async function register(email, username, tel, password) {
  const existing = await User.findOne({ email }).collation({
    locale: "en",
    strength: 2,
  });
  if (existing) {
    throw new Error("Email is taken");
  }

  const user = await User.create({
    email,
    username,
    tel,
    hashedPassword: await bcrypt.hash(password, 10),
  });

  return createToken(user);
}

async function getProfileInfo(userId) {
  const user = await User.findOne({userId});
  return createToken(user);
}

async function login(email, password) {
  const user = await User.findOne({ email }).collation({
    locale: "en",
    strength: 2,
  });
  if (!user) {
    throw new Error("Incorrect email or password");
  }

  const match = await bcrypt.compare(password, user.hashedPassword);
  if (!match) {
    throw new Error("Incorrect email or password");
  }

  return createToken(user);
}

async function logout(token) {
  tokenBlacklist.add(token);
}

function createToken(user) {
  const payload = {
    _id: user._id,
    email: user.email,
    username: user.username,
  };

  return {
    _id: user._id,
    email: user.email,
    username: user.username,
    accessToken: jwt.sign(payload, secret, {expiresIn: '2 days'}),
  };
}

function parseToken(token) {
  if (tokenBlacklist.has(token)) {
    throw new Error("Token is blacklisted");
  }

  return jwt.verify(token, secret);
}

module.exports = {
  register,
  login,
  logout,
  parseToken,
  getProfileInfo
};
