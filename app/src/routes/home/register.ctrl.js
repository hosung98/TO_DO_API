"use strict";



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

        conn.query(query, function (error, results, fields) {
            console.log(results);
        });
    }

    
};

module.exports = {
    sign
  };