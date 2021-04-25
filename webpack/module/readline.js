/*
[readline module]
- node.js에서 제공

사용자로부터 입력을 받을 수 있게 여러 기능을 제공
*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('원하는 도형을 작성해주세요 : ', (input) => {
  console.log(input);
  rl.close();
});
