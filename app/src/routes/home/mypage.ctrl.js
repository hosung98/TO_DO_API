"use strict";

const mypage = {
    info:(req, res) => {
        
        let param = {
            id : req.query.id
        }

        const db = require('../../../config/DBconnection');
        const conn = db.init();

        let format = {language : 'sql', indent : ''};
        let query = global.mapper.getStatement('mypageMapper', 'memberInfo', param, format);

        let result = {
            sucess : "",
            msg : ""
        }

        conn.query(query, function (error,  results) {
            console.log(results);
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


 
    }
};

module.exports = {
    mypage
};