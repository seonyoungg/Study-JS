/*
반환값이 있는 함수
*/

add();
add();
// console.log('-------------------------');
add100(10);
add100(20);
// console.log('-------------------------');
sum(10, 20);
sum(30, 40);

// 10  + 100 의  결과를 출력하는 함수
function add() {
  console.log(10 + 100);
}

// 전달받은 숫자와 100의 합계를 출력하는 함수 (add100)
function add100(number) {
  console.log(number + 100);
}

// 전달받은 두 숫자의 합계를 출력하는 함수(sum)
function sum(a, b) {
  console.log(a + b);
}

// 전달받은 두 숫자의 합계를 반환하는 함수 (getSum -> return)
function getSum(n1, n2) {
  const result = n1 + n2;
  return result;
}

let retrunVal = getSum(120, 50);
console.log(getSum(120, 50));
console.log(retrunVal);
