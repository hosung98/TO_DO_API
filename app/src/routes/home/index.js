"use strict";

const express = require("express");
const router = express.Router();

let ctrl = require("./home.ctrl");

router.get("/", ctrl.show.home);
router.get("/login", ctrl.show.login);
router.post("/login", ctrl.process.login); 

// 외부로 내보내기
module.exports = router;
