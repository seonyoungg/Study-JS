/*
제목: 색종이
설명: 2차원 배열을 활용하여 색종이로 평면을 덮는 문제
제출: https://www.acmicpc.net/submit/2563

문제
가로, 세로의 크기가 각각 100인 정사각형 모양의 흰색 도화지가 있다. 
이 도화지 위에 가로, 세로의 크기가 각각 10인 정사각형 모양의 검은색 색종이를 색종이의 변과 도화지의 변이 평행하도록 붙인다. 
이러한 방식으로 색종이를 한 장 또는 여러 장 붙인 후 색종이가 붙은 검은 영역의 넓이를 구하는 프로그램을 작성하시오.

예를 들어 흰색 도화지 위에 세 장의 검은색 색종이를 그림과 같은 모양으로 붙였다면 검은색 영역의 넓이는 260이 된다.
https://u.acmicpc.net/6000c956-1b07-4913-83c3-72eda18fa1d1/Screen%20Shot%202021-06-23%20at%2012.27.04%20PM.png

입력
첫째 줄에 색종이의 수가 주어진다. 
이어 둘째 줄부터 한 줄에 하나씩 색종이를 붙인 위치가 주어진다. 
색종이를 붙인 위치는 두 개의 자연수로 주어지는데 
첫 번째 자연수는 색종이의 왼쪽 변과 도화지의 왼쪽 변 사이의 거리이고, 
두 번째 자연수는 색종이의 아래쪽 변과 도화지의 아래쪽 변 사이의 거리이다. 
색종이의 수는 100 이하이며, 색종이가 도화지 밖으로 나가는 경우는 없다

출력
첫째 줄에 색종이가 붙은 검은 영역의 넓이를 출력한다.

예제 입력 1 복사
3
3 7
15 7
5 2

예제 출력 1 복사
260
*/

const fs = require('fs');
const fileData = fs.readFileSync(0).toString().trim().split('\n');

// 100 * 100 배열생성
const paper = [];
for (let i = 0; i < 100; i++) {
  paper.push(new Array(100).fill(0));
}
// const paper = Array(100).fill(Array(100).fill(0));
// console.log(paper);

// (a, b) 좌표값 위치에 따른 색칠(1)
for (let i = 0; i < fileData.length; i++) {
  const [a, b] = fileData[i].trim().split(' ').map(Number);

  for (let k = a; k < a + 10; k++) {
    for (let j = b; j < b + 10; j++) {
      paper[k][j] = 1;
    }
  }
}

// 100*100 배열(paper)의 1의 갯수
let count = 0;
for (let k = 0; k < 100; k++) {
  for (let j = 0; j < 100; j++) {
    if (paper[k][j] === 1) {
      count += 1;
    }
  }
}

console.log(count);
