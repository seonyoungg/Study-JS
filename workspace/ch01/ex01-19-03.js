/*

지정한 연산자와 숫자를 받아서 사칙 연산을 수행하는 프로그램
연산자는 +, -, *, /만 입력 가능

잘못된 연산자를 입력할 경우 '잘못된 입력' 출력
*/

const operator = '+';
const n1 = 10;
const n2 = 20;

const operatorArray = ['+', '-', '*', '/'];

if (operatorArray.includes(operator)) {
  console.log(eval(`${n1} ${operator} ${n2}`));
} else {
  console.log('잘못된 입력');
}

switch (operator) {
  case '+':
    console.log(n1 + n2);
    break;
  case '-':
    if (n1 > n2) {
      console.log(n1 - n2);
    } else {
      console.log(n2 - n1);
    }
    break;
  case '*':
    console.log(n1 * n2);
    break;
  case '/':
    if (n2 !== 0) {
      console.log(n1 / n2);
    } else {
      console.log('0으로는 나눌 수 없습니다.');
    }
    break;
  default:
    console.log('잘못된 연산자 입력입니다.');
}

/*
1 ~ 7 사이의 숫자를 받아서 해당 요일을 출력하는 프로그램
1은 월요일, 2는 화요일, ... 7은 일요일
1 ~ 7 사이의 숫자가 아닐 경우 "잘못된 입력" 출력
*/

/*
1 ~ 12 사이의 월을 받아서 게절을 출력하는 프로그램
봄: 4월, 여름: 5 ~ 10월, 가을: 11월, 겨울: 12 ~ 3월
1 ~ 12 사이의 숫자가 아닐 경우 "잘못된 입력" 출력
*/

// switch (month) {
//   case 4:
//     console.log('봄');
//     break;
//   case 11:
//     console.log('가을');
//     break;
//   case 5:
//   case 6:
//   case 7:
//   case 8:
//   case 9:
//   case 10:
//     console.log('여름');
//     break;
//   case 1:
//   case 2:
//   case 3:
//   case 12:
//     console.log('겨울');
//     break;
//   default:
//     console.log('잘못된 입력');
// }
