/*
for문을 이용해서 구구단 작성

출력 예시:
3 x 1 = 3
3 x 2 = 6
...
3 x 9 = 27
*/

// const dan = 3;

// for (let i = 1; i <= 9; i++) {
//   console.log(`${dan} x ${i} = ${dan * i}`);
// }

/*
2단부터 9단까지 출력
출력 예시
2*1 = 2
2*2 =4
....
9*8=72
9*9=81
*/
// for (let num = 2; num <= 9; num++) {
//   for (let k = 1; k <= 9; k++) {
//     console.log(`${num} X ${k} = ${num * k}`);
//   }
// }

for (let k = 1; k <= 9; k++) {
  let gugu = '';
  for (let num = 2; num <= 9; num++) {
    gugu += `${num} X ${k} = ${num * k}`.padEnd(12);
  }
  console.log(gugu);
}
