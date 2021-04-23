/*
[Module Keyword 가져오기 (ESM)]

- npm install esm
- 출력문: node -r esm index.js


1. 원의 넓이를 구하는 공식
2. PI 정의
3. 공식을 통해 결과 얻기
*/

// 가져오기
import mathUtil from './mathUtil';

const result = mathUtil.getCircleArea(2);
console.log(result);
