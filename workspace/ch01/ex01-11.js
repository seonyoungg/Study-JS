/*
비교 연산자 >, >=, <, <=, ==, !=, ===, !==
*/

var a = 5;
var b = 10;
var c = '5';
var d = 5;

// 크다
console.log(a > b); //  false

// 작다
console.log(a < b); // true

// 크거나 같다
console.log(a >= d); // true

// 작거나 같다
console.log(a <= d); // true

// 같다
console.log(a == c); // true 동등
console.log(a === c); // false 일치

console.log('ch05' > 'ch01'); // 사전순으로 비교 // true
console.log('ch12' > 'ch2'); // 사전순으로 비교 // false (한글자씩 비교)
