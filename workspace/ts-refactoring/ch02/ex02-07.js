/*
  함수 생성 2 (표현식)
*/

// 표현식 방식의 함수 선언(기명함수)
const add = function sum(a, b) {
  const result = a + b;
  return result;
}

console.log(add(10, 20)); // 30
console.log(sum(10, 20)); // Error : sum is not defined

//재귀함수로 활용하는 경우 기명함수의 방법 사용하곤 함