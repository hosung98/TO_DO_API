// 서버를 띄워주는 코드
const app = require("../app");
const PORT = 3000;

app.listen(PORT, () => {
  console.log('http://localhost:3000/ :: 서버 가동');
});