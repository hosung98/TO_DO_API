"use strict";

const findContent = {
    info:(req, res) => {
        let param = {
            searchVal : req.body.searchVal  //검색값
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

module.exports = {
    findContent
};