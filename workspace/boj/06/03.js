/*
제목: 별 찍기 - 7
설명: 🌟
제출: https://www.acmicpc.net/submit/2444

문제
예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.

입력
첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

출력
첫째 줄부터 2×N-1번째 줄까지 차례대로 별을 출력한다.

예제 입력 1
3
예제 출력 1
  *
 ***
*****
 ***
  *

예제 입력 2
4
예제 출력 2
    *
   ***
  *****
 *******
  *****
   ***
    *

예제 입력 3
5
예제 출력 3
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/

const fs = require('fs');
const fileData = fs.readFileSync(0).toString().trim();
const n = parseInt(fileData);

let result = '';

for (let i = 1; i <= n; i++) {
  const space = ' '.repeat(n - i);
  const star = '*'.repeat(2 * i - 1);
  result += space + star + '\n';
}

for (let k = n - 1; k > 0; k--) {
  const space = ' '.repeat(n - k);
  const star = '*'.repeat(2 * k - 1);
  result += space + star + '\n';
}

console.log(result);
