// [CommonJS 모듈 예제]
const PI = 3.14;
const getCircleArea = (r) => r * r * PI;

// 내보내기 방법1
/* 
module.exports = {
    PI,
    getCircleArea,
}; 
*/

// 내보내기 방법2
exports.PI = PI;
exports.getCircleArea = getCircleArea;
