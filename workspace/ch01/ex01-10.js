/*
증감 연산자 a++, a--, ++a, --a
*/

var count = 0; // 0으로 reset
console.log(count); // 0

count = count + 1; // 0 + 1 = 1
count += 1; // 1 + 1 = 2
count++; // 2 + 1 = 3

console.log(count); // 3
console.log(count++); // 3
console.log(count); // 4
console.log(++count); // 5
console.log(count); // 5
