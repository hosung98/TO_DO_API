"use strict";

const home = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true'); // 쿠키 주고받기 허용
  res.json({'id': 'hosung'});
  //res.end();
  res.render("home/index");
};

const login = (req, res) => {
  res.render("home/login");
};

// == home: home 형식과 같음(value 값을 넣어주지 않으면 key와 동일한 value값이 들어간다.)
module.exports = {
  home, 
  login,
};