"use strict";

const express = require("express");
const cors = require("cors");
const app = express();

const router = express.Router();

app.use(cors());

const ctrl = require("./home.ctrl");

// ex) / 경로로 왔을때는 home으로 간다.
router.get("/", ctrl.home);
router.post("/login", ctrl.login);

// 외부로 내보내기
module.exports = router;