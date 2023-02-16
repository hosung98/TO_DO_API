"use strict";
let  bseq = "";
const addBoardCtrl = {
    addBoard:(req, res) => {

        console.log(req.body);
        //reqbody
        let param = {
            userId : req.body.userId,   //작성아이디
            userNm : req.body.userNm,   //작성자
            subject : req.body.subject, //제목
            content  : req.body.content,//내용
            item : '',
            boardseq : ''
        }
        
        //respons form
        let result = {
            success : "",
            msg : ""
        }     

        // 인증 완료
        const db = require('../../../config/DBconnection');
        const conn = db.init();

        let format = {language : 'sql', indent : ''};
        
        //시퀀스 가져오기
        let query1 = global.mapper.getStatement('boardMapper', 'getBoardSeq', param, format);
        conn.query(query1,function(err,rows){
            bseq = rows[0].SEQ; //board seq
            param.boardseq = bseq;

            let cnt = param.content.length;
            //컨텐츠 개수만큼 테이블 추가
            for(let i = 0; i < cnt; i++){
                param.item = param.content[i];
                let query2 = global.mapper.getStatement('boardMapper', 'addBoard', param, format);
                conn.query(query2, function (error, rows) {
                    console.log("sql :: " + query2);
                    //Error
                    if (rows.affectedRows == 0) {
                        result.success = false;
                        result.msg = "입력도중 오류가 발생하였습니다.";
                        res.json(result);
                        return ;
                    }
                    if (i == cnt-1){
                        result.success = true;
                        result.msg = "success";
                        res.json(result);
                    }
                });     
            }
        });

    }
};

//list li
function addBoard(){


}

module.exports = {
    addBoardCtrl
};