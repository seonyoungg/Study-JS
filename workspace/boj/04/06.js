/*
제목: 공 바꾸기
설명: 배열의 값을 교환하는 문제
제출: https://www.acmicpc.net/submit/10813

문제
도현이는 바구니를 총 N개 가지고 있고, 각각의 바구니에는 1번부터 N번까지 번호가 매겨져 있다. 
바구니에는 공이 1개씩 들어있고, 처음에는 바구니에 적혀있는 번호와 같은 번호가 적힌 공이 들어있다.
도현이는 앞으로 M번 공을 바꾸려고 한다. 
도현이는 공을 바꿀 바구니 2개를 선택하고, 두 바구니에 들어있는 공을 서로 교환한다.
공을 어떻게 바꿀지가 주어졌을 때, M번 공을 바꾼 이후에 각 바구니에 어떤 공이 들어있는지 구하는 프로그램을 작성하시오.

입력
첫째 줄에 N (1 ≤ N ≤ 100)과 M (1 ≤ M ≤ 100)이 주어진다.
둘째 줄부터 M개의 줄에 걸쳐서 공을 교환할 방법이 주어진다. 
각 방법은 두 정수 i j로 이루어져 있으며, i번 바구니와 j번 바구니에 들어있는 공을 교환한다는 뜻이다. (1 ≤ i ≤ j ≤ N)
도현이는 입력으로 주어진 순서대로 공을 교환한다.

출력
1번 바구니부터 N번 바구니에 들어있는 공의 번호를 공백으로 구분해 출력한다.

예제 입력 1 
5 4
1 2
3 4
1 4
2 2

예제 출력 1 
3 1 4 2 5
*/

const fs = require('fs');
const fileData = fs.readFileSync(0).toString().trim().split('\n');

const NM = fileData[0].split(' ');
const N = parseInt(NM[0]);
const M = parseInt(NM[1]);

let basket = [];
for (let i = 1; i < N + 1; i++) {
  basket.push(i);
}

for (let i = 1; i < M + 1; i++) {
  const array = fileData[i].split(' ').map(Number);
  const ball = array[0];
  const ballCopy = basket[ball - 1];
  const ball2 = array[1];
  const ballCopy2 = basket[ball2 - 1];

  basket.splice(ball - 1, 1, ballCopy2);
  basket.splice(ball2 - 1, 1, ballCopy);
}

console.log(basket.join(' '));
