"use strict";


const db = require('../../../config/DBconnection');
const conn = db.init();

const format = {language : 'sql', indent : ''};

const mypage = {
    info:(req, res) => {
        
        let param = {
            id : req.query.id
        }

        let query = global.mapper.getStatement('mypageMapper', 'memberInfo', param, format);

        let result = {
            sucess : "",
            msg : ""
        }

        conn.query(query, function (error,  results) {
            if(results == ""){
                result.sucess = false;
                result.msg = "조회되는 사용자의 정보가 없습니다.";
                res.status(400).json(result);
                return;
            }else{
                result.sucess = true;
                result.msg = "사용자의 정보가 조회되었습니다.";
                res.json(results);
            }
        });


 
    },

    check:(req, res) => {
        let param = {
            id : req.query.id,
            password : req.query.password
        }

        let query = global.mapper.getStatement('mypageMapper', 'checkInfo', param, format);

        let result = {
            sucess : "",
            msg : ""
        }

        conn.query(query, function (error,  results) {
            res.json(results)
        });
    },

    change:(req, res) => {
        let param = {
            id : req.body.id,
            name : req.body.name
        }

        let query = global.mapper.getStatement('mypageMapper', 'changeInfo', param, format);

        let result = {
            sucess : "",
            msg : ""
        }        

        conn.query(query, function (error,  results) {
            if(results.changedRows> 0){
                result.sucess = true;
                result.msg = "SUCESS";
            }else{
                result.sucess = false;
                result.msg = "FAIL";
            }
            res.json(result);
        });        
    }
};

module.exports = {
    mypage
};