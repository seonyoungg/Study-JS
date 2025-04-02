/*
반복문 - while문
*/

//1부터  10까지 출력
// console.log(1);
// console.log(2);
// ...
// console.log(10);

let sum = 0;
let i = 1; //초기화
while (i < 11) {
  //조건식
  sum += i; //실행할코드
  console.log(i);
  i++; // 증감식
}

console.log('sum: ', sum);
