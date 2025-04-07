/*
제목: A+B - 4
설명: 입력이 끝날 때까지 A+B를 출력하는 문제. EOF에 대해 알아 보세요.
제출: https://www.acmicpc.net/submit/10951

문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력
입력은 여러 개의 테스트 케이스로 이루어져 있다.
각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력
각 테스트 케이스마다 A+B를 출력한다.

예제 입력 1
1 1
2 3
3 4
9 8
5 2

예제 출력 1
2
5
7
17
7
*/

const fs = require('fs');
const fileData = fs.readFileSync(0).toString().trim().split('\n'); // \n 줄을 기준으로 나눈 후 배열로 반환

const length = fileData.length; // 배열의 길이를 측정

for (let i = 0; i < length; i++) {
  const numberArray = fileData[i].split(' '); // 공백을 기준으로 줄 마다 배열로 반환
  const a = parseInt(numberArray[0]); // 배열의 첫번째 숫자 반환
  const b = parseInt(numberArray[1]); // 배열의 두번째 숫자 반환

  console.log(a + b);
}
