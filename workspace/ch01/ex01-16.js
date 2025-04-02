/*
if문

if (조건식){
조건식이 참일때 실행할 코드;
조건식이 참일때 실행할 코드;
조건식이 참일때 실행할 코드;
...
}
*/

// age가 20 이상이면 "성인" 출력
// age가 20 미만이면 "미성년자" 출력
let age = '';
if (age >= 20) {
  console.log('성인');
} else {
  console.log('미성년자');
}

// num이 양수이면 "양수" 출력
// num이 음수이면 "음수" 출력
// num이 0이면 "0" 출력
let num = '';
if (num > 0) {
  console.log('양수');
} else if (num < 0) {
  console.log('음수');
} else if (num == 0) {
  console.log(0);
}

// password가 1234면 "로그인 성공!" 출력
// password가 1234가 아니면 "로그인 실패!" 출력
let password = '';
password == 1234 ? console.log('로그인성공') : console.log('로그인 실패!');

// num2가 짝수이면 "짝수" 출력
// num2가 홀수이면 "홀수" 출력
let num2 = 5;
num2 % 2 == 0 ? console.log('짝수') : console.log('홀수');

// num3가 3의 배수이면 "3의 배수" 출력
// num3가 3의 배수가 아니면 "3의 배수가 아님" 출력
let num3 = '';
num3 % 3 == 0 ? console.log('3의 배수') : console.log('3의 배수가 아님');
