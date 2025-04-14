/*
첫 번째 구매 항목 출력(두부)하고 그 값을 양파로 수정
document.getElementById(id): id 속성으로 요소 선택
텍스트 노드의 nodeValue: 문자열 값
*/

let purchaseFirstItemText = document.querySelector(
  '#purchases > li:first-child'
).textContent;
console.log(purchaseFirstItemText);

purchaseFirstItemText = '양파';
console.log(purchaseFirstItemText);
