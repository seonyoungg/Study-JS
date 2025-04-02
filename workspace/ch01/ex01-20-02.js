/*
반복문 - while문
*/

// 1부터 10까지 홀수의 합계 출력  25
let sumOdd = 0;
let n = 0;
while (n < 5) {
  let odd = 2 * n + 1;
  sumOdd += odd;
  n++;
}

console.log(sumOdd);

// 1부터 10까지 짝수의 합계 출력 30
let sumEven = 0;
let num = 0;
while (num < 6) {
  let even = 2 * num;
  sumEven += even;
  num++;
}

console.log(sumEven);

//전체
let evenSum = 0;
let oddSum = 0;
let number = 0;
while (number <= 10) {
  if (number % 2 == 0) {
    evenSum += number;
  } else {
    oddSum += number;
  }

  number++;
}

console.log('짝수의 합계 : ', evenSum);
console.log('홀수의 합계 : ', oddSum);
