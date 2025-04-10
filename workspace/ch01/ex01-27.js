/*
배열의 모든 요소 읽기 1 - for 루프, for...of, for...in
*/

// const arr = [1, 2, 3, 4];
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//배열의 모든 요소 출력
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

const sum = {
  all: 0,
  odd: 0,
  even: 0,
};

for (let i = 0; i < arr.length; i++) {
  const number = arr[i];

  //배열 모든 요소의 합계
  sum.all += parseInt(number);

  //짝수의 합계
  if (number % 2 === 0) {
    sum.even += parseInt(number);
  } else {
    //홀수의 합계
    sum.odd += parseInt(number);
  }
}

console.log('모든 수의 합계:' + sum.all);
console.log('짝수의 합계:' + sum.even);
console.log('홀수의 합계:' + sum.odd);

// for in
// let result = 0;
// for (props in arr) {
//   result += parseInt(arr[props]);
// }
// console.log(result);

// for of  :: index는 사용하지 않고 배열 요소의 값만 꺼내서 사용할 때
let result = 0;
for (let element of arr) {
  // console.log(element);
  result += element;
}

console.log(result);
