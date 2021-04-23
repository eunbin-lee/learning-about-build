/*
[CommonJS 모듈 예제]

1. 원의 넓이를 구하는 공식
2. PI 정의
3. 공식을 통해 결과 얻기
*/

// 가져오기
const { getCircleArea } = require('./mathUtil');

const result = getCircleArea(2);
console.log(result);
