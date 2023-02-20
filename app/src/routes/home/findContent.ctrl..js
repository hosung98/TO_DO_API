"use strict";

const findContent = {
    info:(req, res) => {
        let param = {
            searchVal : req.query.searchVal  //검색값
        }


        //respons form
        let result = {
            success : "",
            msg : "",
            content : "",
        }     

        // 인증 완료
        const db = require('../../../config/DBconnection');
        const conn = db.init();

        let format = {language : 'sql', indent : ''};
        let query = global.mapper.getStatement('boardMapper', 'findContent', param, format);

        console.log("sql :: " + query);
        conn.query(query, function (error, rows) {
        
        //Error
        if (rows == '') {
            result.success = false;
            result.msg = "검색된 정보가 없습니다.";
            res.status(400).json(result);
            return;
        }
        //SUCCESS           
            result.success = true;
            result.msg = "success";
            result.content = rows;
            res.json(result);
        });     
    }
};

const findUserInfo = {
    info:(req, res) => {
        let param = {
            searchVal : '1'  //검색값
        }

        //respons form
        let result = {
            success : "",
            msg : "",
            userInfo : "",
        }     

        // 인증 완료
        const db = require('../../../config/DBconnection');
        const conn = db.init();

        let format = {language : 'sql', indent : ''};
        let query = global.mapper.getStatement('boardMapper', 'findUserInfo', param, format);

        console.log("sql :: " + query);
        conn.query(query, function (error, rows) {
        
        //Error
        if (rows == '') {
            result.success = false;
            result.msg = "조회가능한 정보가 없습니다.";
            res.status(400).json(result);
            return;
        }

        //SUCCESS           
            result.success = true;
            result.msg = "success";
            result.userInfo = rows;
            res.json(result);
        });     
    }
};

module.exports = {
    findContent,
    findUserInfo
};