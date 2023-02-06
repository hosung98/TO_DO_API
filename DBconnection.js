
const mysql = require('mysql');  // mysql 모듈 로드
const mybatisMapper = require('mybatis-mapper');

const conn = {  // mysql 접속 설정
    host: '43.201.121.190',
    port: '51211',
    user: 'autobit',
    password: 'autobit1!',
    database: 'BITDB'
};


let connection = mysql.createConnection(conn); // DB 커넥션 생성
connection.connect();   // DB 접속


mybatisMapper.createMapper(['./mybatis-mapper/login.xml']);
 
let param = {
    id : "admin1"
}

//질의문 형식
let format = {language: 'sql', indent: '  '};
let query = mybatisMapper.getStatement('testMapper', 'testBasic', param, format);
//첫번째는 xml의 name값, 두번째는 해당 xml의 id값, 세번째는 파라미터, 마지막은 포맷 입니다.

console.log(query);  //해당쿼리가 조합된 것을 볼 수 있습니다.

connection.query(query, function (error, results, fields) {  //조회
    if (error) {
        console.log(error);
    }
    console.log(results);
});
connection.end();