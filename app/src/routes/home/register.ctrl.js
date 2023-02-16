"use strict";

const check = {
    idCheck : (req, res) => {
        let param = {
            id : req.query.id
        }

        console.log(param);


        const db = require('../../../config/DBconnection');
        const conn = db.init();

        let format = {language : 'sql', indent : ''};
        let query = global.mapper.getStatement('registerMapper', 'checkId', param, format);        

        conn.query(query, function (error, results){
            res.json(results);
        });
    }
}

const sign = {
    register : (req, res) => {
        let param = {
            id : req.body.id,
            password : req.body.psword,
            name : req.body.name
        }

        console.log(param);

        const db = require('../../../config/DBconnection');
        const conn = db.init();

        let format = {language : 'sql', indent : ''};
        let query = global.mapper.getStatement('registerMapper', 'signUpMember', param, format);

        let result = {
            success : "",
            msg : ""
        }

        conn.query(query, function (error, rows) {
            console.log(rows);
        //Error
        if (rows.affectedRows == 0) {
            result.success = false;
            result.msg = "해당 로그인 정보가 없습니다.";
            res.status(400).json(result);
            return;
        }            

            result.success = true;
            result.msg = "success";
            res.json(result);
        });
    }

    
};

module.exports = {
    sign,
    check
  };