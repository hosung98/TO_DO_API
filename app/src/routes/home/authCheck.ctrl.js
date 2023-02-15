"use strict";
const jwt = require('jsonwebtoken');
const jwtSecret = 'mySecretKey';

const authCheck = {
    register : (req, res) => {
        let param = {
            token : req.body.token
        }


        let result = {
            success : "",
            msg : ""
        }        
        // 인증 완료
        console.log("token :: "+ param.token);
        jwt.verify(param.token,jwtSecret,(err,encode)=>{
            if(err){ 
                result.success = false;
                result.msg = "해당 토큰이 만료되었습니다.";
                res.status(400).json(result);
                console.error(err);
            }else {
                result.success = true;
                result.msg = "";
                res.status(200).json(encode);                
            }
        });

    }

    
};

module.exports = {
  authCheck
};