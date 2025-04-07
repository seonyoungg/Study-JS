/*
제목: 별 찍기 - 1
설명: 별을 찍는 문제 1
제출: https://www.acmicpc.net/submit/2438

문제
첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

입력
첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

출력
첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

예제 입력 1
5

예제 출력 1
*
**
***
****
*****
*/

const fs = require('fs');
const fileData = fs.readFileSync(0).toString().trim();
const lines = parseInt(fileData); //들어온 값 정수로 반환

let result = '';
for (let i = 0; i < lines; i++) {
  result += '*';
  console.log(result);
}

// i=0일때 *로 저장 -> '*'
// i=1일때 * + * 저장 -> '**'
// i=n일때 * 갯수(n+1)
