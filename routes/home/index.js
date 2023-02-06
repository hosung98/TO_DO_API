"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

// ex) / 경로로 왔을때는 home으로 간다.
router.get("/", ctrl.home);
router.get("/login", ctrl.login);

// 외부로 내보내기
module.exports = router;
