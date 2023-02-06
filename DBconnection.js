const mysql = require('mysql');  // mysql 모듈 로드
const conn = {  // mysql 접속 설정
    host: '43.201.121.190',
    port: '51211',
    user: 'autobit',
    password: 'autobit1!',
    database: 'BITDB'
};


let connection = mysql.createConnection(conn); // DB 커넥션 생성
connection.connect();   // DB 접속
 


sql = "SELECT * FROM T_IFO_MEMBERS";
 
connection.query(sql, function (err, results, fields) { 
    if (err) {
        console.log(err);
    }
    console.log(results);
});
 
 
connection.end(); // DB 접속 종료