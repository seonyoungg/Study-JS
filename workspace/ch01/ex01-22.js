/*
반복문 - break, continue
*/

// n ~ m까지의 정수중에서 가장  작은 짝수를 찾아서 출력하세요
// n < m

const n = 1;
const m = 10;

// let result;
// for (let i = n; i <= m; i++) {
//   if (i % 2 === 0) {
//     console.log(i + '는 짝수입니다.');
//     break;
//   }
// }

// n부터 m까지 홀수와 짝수를 구분해서 출력하세요.

for (let i = n; i <= m; i++) {
  if (i % 2 === 0) {
    console.log(i + '는 짝수입니다.');
  } else {
    console.log(i + '는 홀수입니다.');
  }
}
