// 모듈
const express = require('express');
var bodyParser = require('body-parser')
const mybatisMapper = require('mybatis-mapper');
mybatisMapper.createMapper(['./mybatis-mapper/login.xml']);
global.mapper = mybatisMapper;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 라우팅
const home = require("./routes/home");

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");


//DB 연결설정
const mysql = require('mysql');            //mysql 모듈 로드
var db = require('./config/DBconnection'); //db 연결 모듈 호출

var conn = db.init();  //db 모듈 커넥션 실행
db.conn(conn);         //db 연결 확인


app.use("/", home);    // use -> 미들 웨어를 등록해주는 메서드.
module.exports = app;