"use strict";
const db = require('../../config/DBconnection'); //db설정 호출
const conn =  db.init(); //db 연결



const home = (req, res) => {

};


// REST-API (/login)
const login = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true'); // 쿠키 주고받기 허용
	

  let param = {
      id : req.query.id,
      password : req.query.password
  }
  
  //질의문 형식
  let format = {language: 'sql', indent: '  '};
  let query = global.mapper.getStatement('loginMapper', 'loginCheck', param, format);

  let result = {
    code : "",
    results : ""
  }

  conn.query(query, function (error, results, fields) {  //조회
      
      if (error) {
          res.status(400).json(results);
          return;
      }
      console.log(query)
      res.status(200).json(results);
  });
};




module.exports = {
  home, 
  login,
};