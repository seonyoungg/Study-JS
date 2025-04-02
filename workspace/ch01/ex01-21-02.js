/*
반복문 - for문
*/

// 1부터 10까지 출력
for (let i = 1; i < 11; i++) {
  console.log(i);
}

// 1부터 10까지 홀수의 합계 출력. 25
// 1부터 10까지 짝수의 합계 출력. 30
let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i < 11; i++) {
  if (i % 2 == 1) {
    sumOdd += i;
  } else {
    sumEven += i;
  }
}
console.log('홀수 합계 :', sumOdd, '짝수 합계 :', sumEven);
