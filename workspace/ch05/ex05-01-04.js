/*
querySelector를 이용해서 첫번째, 마지막항목 출력
*/

// const firstItem = document.querySelector('#purchases > li:first-child')
//   .firstChild.nodeValue;
// const lastItem = document.querySelector('#purchases > li:last-child').firstChild
//   .nodeValue;

// console.log(firstItem, lastItem);

const btn = document.querySelector('button');

let purchaseItem = document
  .getElementById('purchases')
  .firstChild.firstChild.nodeValue();

purchaseItem.nodeValue = '양파';

// console.log(purchaseItem);
