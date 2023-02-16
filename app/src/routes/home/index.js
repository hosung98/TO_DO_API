"use strict";

const express = require("express");
const router = express.Router();

let authCheck = require("./authCheck.ctrl");
let ctrl = require("./home.ctrl");
let ctrlRegister = require("./register.ctrl");
let ctrlMyPage = require("./mypage.ctrl");
let ctrlContent = require("./findContent.ctrl.");

//view
router.get("/", ctrl.show.home);
router.get("/login", ctrl.show.login);

//control(GET 방식)
router.get("/authCheck",authCheck.authCheck.register); 
router.get("/mypage", ctrlMyPage.mypage.info);
router.get("/findContent", ctrlContent.findContent.info);  
router.get("/register", ctrlRegister.check.idCheck);

//control(POST 방식)
router.post("/register", ctrlRegister.sign.register);
router.post("/login", ctrl.process.login); 

// 외부로 내보내기
module.exports = router;
