/*
제목: A+B - 3
설명: A+B를 여러 번 출력하는 문제
제출: https://www.acmicpc.net/submit/10950

문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 테스트 케이스의 개수 T가 주어진다.
각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력
각 테스트 케이스마다 A+B를 출력한다.

예제 입력 1
5
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
const fileData = fs.readFileSync(0).toString().trim().split('\n');

// 테스트 케이스의 개수 T
const Tcount = parseInt(fileData[0]);

if (fileData.length > 1) {
  // 2번째 줄부터 시작(=index[1])
  for (let i = 1; i <= Tcount; i++) {
    // 2번째줄 lines 는 [a b]형태로 반환된 것을 공백을 기준으로 나눔
    const lines = fileData[i].split(' ');

    // a와 b number type으로 변환
    const a = parseInt(lines[0]);
    const b = parseInt(lines[1]);

    //매번 a+b 반환
    console.log(a + b);
  }
}
