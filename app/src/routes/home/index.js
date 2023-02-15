"use strict";

const express = require("express");
const router = express.Router();

let ctrl = require("./home.ctrl");
let ctrlRegister = require("./register.ctrl");
let authCheck = require("./authCheck.ctrl");


//view
router.get("/", ctrl.show.home);
router.get("/login", ctrl.show.login);

//control
router.post("/login", ctrl.process.login); 
router.get("/authCheck",authCheck.authCheck.register); 
router.post("/register", ctrlRegister.sign.register); 

// 외부로 내보내기
module.exports = router;
