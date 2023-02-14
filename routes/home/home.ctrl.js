"use strict";
const { json } = require('express');
const db = require('../../config/DBconnection'); //db설정 호출
const conn =  db.init(); //db 연결



const home = (req, res) => {

};


// REST-API (/login)
const login = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true'); // 쿠키 주고받기 허용
  

  console.log("req : " +  req.body.id);
  let param = {
      id : req.query.id,
      password : req.query.password
  }
  
  //질의문 형식
  let format = {language: 'sql', indent: '  '};
  let query = global.mapper.getStatement('loginMapper', 'loginCheck', param, format);

  let result = {
    success : "",
    msg : ""
  }

  
  conn.query(query, function (error, results, fields) {  
      //Error
      if (error || results[0].cnt == 0) {
          result.success = false;
          result.msg = "해당 로그인 정보가 없습니다.";
          res.status(400).json(result);
          return;
      }
      console.log("LOG :: ================ " + query);
      result.success = true;
      result.msg = "";      
      res.status(200).json(result);
  });
};




module.exports = {
  home, 
  login,
};