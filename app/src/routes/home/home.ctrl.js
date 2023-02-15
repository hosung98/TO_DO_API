"use strict";
const jwt = require('jsonwebtoken');
const secretKey = 'mySecretKey';


const process = {
  login: (req, res) => {
    console.log("reqbody" + req.body);
    let param = {
      id : req.body.id,
      password : req.body.password,
   }

   const db = require('../../../config/DBconnection'); //db설정 호출
   const conn =  db.init(); //db 연결

    //질의문 형식
    let format = {language: 'sql', indent: '  '};
    let query = global.mapper.getStatement('loginMapper', 'loginCheck', param, format);

    let result = {
      success : "",
      token : "",
      msg : ""
    }

    conn.query(query, function (error, results, fields) {  
        //Error
        if (results[0].cnt == 0) {
            result.success = false;
            result.msg = "해당 로그인 정보가 없습니다.";
            res.status(400).json(result);
            return;
        }
        //Success
        console.log("login id :: " + results[0].password);
        //jwtToken 생성
        const payload = {
          id: results[0].id,
          password: results[0].password
        };
        const options = {
          expiresIn: '1m'
        };
        const token = jwt.sign(payload, secretKey, options);
        console.log("발급 jwt token :: " + token);

        result.success = true;
        result.token = token;
        result.msg = "";      
        res.json(result);
    });
  },
  register: (req, res) => {
    res.render("home/register")
  },
};

const show = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

module.exports = {
  show,
  process,
};