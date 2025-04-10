/*
제목: 크로아티아 알파벳
설명: 두세 문자가 한 글자로 묶일 수 있을 때 글자의 수를 세는 문제
제출: https://www.acmicpc.net/submit/2941

문제
예전에는 운영체제에서 크로아티아 알파벳을 입력할 수가 없었다. 따라서, 다음과 같이 크로아티아 알파벳을 변경해서 입력했다.

크로아티아 알파벳	변경
č	c=
ć	c-
dž	dz=
đ	d-
lj	lj
nj	nj
š	s=
ž	z=
예를 들어, ljes=njak은 크로아티아 알파벳 6개(lj, e, š, nj, a, k)로 이루어져 있다. 
단어가 주어졌을 때, 몇 개의 크로아티아 알파벳으로 이루어져 있는지 출력한다.

dž는 무조건 하나의 알파벳으로 쓰이고, d와 ž가 분리된 것으로 보지 않는다. 
lj와 nj도 마찬가지이다. 위 목록에 없는 알파벳은 한 글자씩 센다.

입력
첫째 줄에 최대 100글자의 단어가 주어진다. 알파벳 소문자와 '-', '='로만 이루어져 있다.
단어는 크로아티아 알파벳으로 이루어져 있다. 문제 설명의 표에 나와있는 알파벳은 변경된 형태로 입력된다.

출력
입력으로 주어진 단어가 몇 개의 크로아티아 알파벳으로 이루어져 있는지 출력한다.

예제 입력 1
ljes=njak
예제 출력 1
6

예제 입력 2
ddz=z=
예제 출력 2
3

예제 입력 3
nljj
예제 출력 3
3

예제 입력 4
c=c=
예제 출력 4
2

예제 입력 5
dz=ak
예제 출력 5
3
*/

// function solution(chicken) {
//   var answer = 0;

//   const bbqChicken = {
//     service: Math.trunc(chicken / 10),
//     coupon: chicken % 10,
//     sum: function () {
//       return chicken + this.service;
//     },
//   };

//   console.log(bbqChicken.service);
//   console.log(bbqChicken.coupon);
//   console.log(bbqChicken.sum());
//   return answer;
// }

// solution(1081);

function solution(chicken) {
  let service = 0;

  while (chicken >= 10) {
    let newChicken = Math.trunc(chicken / 10);
    service += newChicken;
    chicken = newChicken + (chicken % 10);
  }

  return service;
}
