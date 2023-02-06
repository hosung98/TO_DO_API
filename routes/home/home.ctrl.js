"use strict";

const home = (req, res) => {
  console.log("====== > home 접속");
  res.render("home/index");
};

const login = (req, res) => {
  res.render("home/login");
};

module.exports = {
  home, 
  login
};