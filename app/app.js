"use strict";
var bodyParser = require('body-parser')

// 모듈
const express = require('express');
const cors = require("cors");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(cors());

app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.
app.use(express.static(`${__dirname}/src/public`)); // app.js 가 있는 디렉토리 위치 : ${__dirname

// db
const mybatisMapper = require('mybatis-mapper');
mybatisMapper.createMapper(['./mybatis-mapper/register.xml']);
global.mapper = mybatisMapper;

//DB 연결설정
const mysql = require('mysql');            //mysql 모듈 로드
var db = require('./config/DBconnection'); //db 연결 모듈 호출

var conn = db.init();  //db 모듈 커넥션 실행
db.conn(conn);         //db 연결 확인

module.exports = app; 